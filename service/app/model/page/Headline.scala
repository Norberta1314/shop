package model.page

import play.api.libs.json.{JsPath, Json, Reads}
import play.api.libs.functional.syntax._

case class Headline(
                     title: String,
                     fontSize: Int,
                     fontColor: String,
                     backgroundColor: String,
                   )

object Headline {
  implicit val headlineFormat = Json.format[Headline]
}
