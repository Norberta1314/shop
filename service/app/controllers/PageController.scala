package controllers

import akka.http.scaladsl.model.HttpHeader.ParsingResult.Ok
import javax.inject._
import model.Page
import services.PageService
import play.api.mvc._
import play.api.libs.json.Json

class PageController @Inject()(pageService: PageService, cc: ControllerComponents) extends AbstractController(cc) {
  def findByShopId(id: Int) = Action {
    pageService.getPageByShop(id) match {
      case pages: List[Page] => Ok(Json.toJson(pages))
    }
  }
}
