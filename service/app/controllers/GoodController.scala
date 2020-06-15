package controllers

import javax.inject.Inject
import model.Good
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import services.GoodService
import utils.ResponseUtils._


class GoodController @Inject()(goodService: GoodService, cc: ControllerComponents) extends AbstractController(cc) {

  def findByShopId(id: Int) = Action {
    goodService.findByShopId(id) match {
      case goods: List[Good] => jsonSuccess(goods)
    }
  }

  def findById(id: Int) = Action {
    goodService.findById(id) match {
      case Some(good) =>
        jsonSuccess(good)
    }
  }

  def insert = Action(parse.json) { request =>
    val good = Json.parse(request.body.toString()).as[Good]
    goodService.insert(good) match {
      case id: Int => jsonSuccess(id)
    }
  }

  def updateById = Action(parse.json) { request =>
    val good = Json.parse(request.body.toString()).as[Good]
    goodService.updateById(good.id, good) match {
      case id: Long => jsonSuccess(id)
    }
  }

  def findListByIds = Action(parse.json) { request =>
    val ids = Json.parse(request.body.toString()).as[List[Int]]
    goodService.findByIds(ids) match {
      case goods: List[Good] => jsonSuccess(goods)
    }
  }
}
