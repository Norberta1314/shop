package controllers

import javax.inject._
import model.Page
import services.PageService
import play.api.mvc._
import play.api.libs.json.Json
import utils.ResponseUtils._


class PageController @Inject()(pageService: PageService, cc: ControllerComponents) extends AbstractController(cc) {
  def findByShopId(id: Int) = Action {
    pageService.findPageByShop(id) match {
      case pages: List[Page] => jsonSuccess(pages)
    }
  }

  def findById(id: Int) = Action {
    pageService.findPageById(id) match {
      case Some(page) =>
        jsonSuccess(page)
    }
  }

  def updateById = Action(parse.json) { request =>
    println(request.body.toString())
    val page = Json.parse(request.body.toString()).as[Page]
    println(page)
    pageService.updateById(page.id, page) match {
      case id: Long => jsonSuccess(id)
    }
  }

  def insert = Action(parse.json) {
    request =>
      val page = Json.parse(request.body.toString()).as[Page]
      pageService.insert(page) match {
        case id: Int => jsonSuccess(id)
      }
  }

  def delete(id: Int) = Action {
    pageService.delete(id) match {
      case id: Long => jsonSuccess(id)
    }
  }
}
