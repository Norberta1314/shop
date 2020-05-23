package model

import java.util.Date

import play.api.libs.json.Json

case class Page(
                 id: Int,
                 shop_id: Int,
                 title: String,
                 style_type: Int,
                 preview_img: String,
                 is_delete: Boolean,
                 create_time: Date,
                 update_time: Date
               )

object Page {
  implicit val pageFormat = Json.format[Page]
}
