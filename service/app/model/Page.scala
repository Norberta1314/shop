package model

import java.util.Date

import play.api.libs.json._


case class Page(
                 id: Int,
                 shopId: Int,
                 title: String,
                 mode: Int,
                 styleType: Int,
                 previewImg: Option[String],
                 backgroundColor: Option[String],
                 components: Option[String],
                 isDelete: Option[Boolean],
                 createTime: Option[Date],
                 updateTime: Option[Date],
               )

object Page {
  implicit val pageFormat: Format[Page] = Json.format[Page]
}


