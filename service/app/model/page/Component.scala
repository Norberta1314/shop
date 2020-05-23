package model.page

import model.page.Headline
import play.api.libs.json.{JsPath, Json, OFormat, Reads}
import play.api.libs.functional.syntax._

case class Component(
                      `type`: Int,
                      headline: Headline
                    )

object Component {
  implicit val componentFormat: OFormat[Component] = Json.format[Component]
//  implicit val componentParse = Json.
}

