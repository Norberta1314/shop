package model

import play.api.libs.json.Json

case class User(id: Int)

object User{
  implicit val userFormat = Json.format[User]
}
