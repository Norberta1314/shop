package controllers

import javax.inject.Inject
import play.api.mvc.{AbstractController, ControllerComponents}
import services.ImageService
import utils.ResponseUtils._

class ImageController @Inject()(imageService: ImageService, cc: ControllerComponents) extends AbstractController(cc) {
  def insert(name: String) = Action {
    imageService.insert(name) match {
      case id: Int => jsonSuccess(id)
    }
  }
}
