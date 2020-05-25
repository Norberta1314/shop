package model

import java.util.Date

import play.api.libs.json.{Format, Json}

case class Image(
                  id: Int,
                  name: String,
                  isDelete: Boolean,
                  createTime: Option[Date],
                  updateTime: Option[Date]
                )

object Image {
  implicit val pageFormat: Format[Image] = Json.format[Image]
}
