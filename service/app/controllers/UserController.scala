package controllers

import javax.inject._
import play.api.libs.json.Json
import play.api.mvc._
import services.UserService


@Singleton
class UserController @Inject()(userService: UserService, cc: ControllerComponents) extends AbstractController(cc) {

  def findById(id: Int) = Action {
    userService.getUser(id) match {
      case Some(user) => Ok(Json.toJson(user))
      case None => Ok("no")
    }
  }

}
