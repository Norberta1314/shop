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
//        val component = Json.parse(page.components.toString()).as[Component]
        jsonSuccess(page)
    }
  }

  def updateById = Action(parse.json) { request =>
    println(request.body.toString())
    val page = Json.parse(request.body.toString()).as[Page]

    pageService.updateById(page.id, page) match {
      case id: Long => jsonSuccess(id)
    }
  }
}
