package model

import java.util.Date

import model.page.{Component}
import play.api.libs.json._


case class Page(
                 id: Int,
                 shopId: Int,
                 title: String,
                 mode: Int,
                 styleType: Int,
                 previewImg: String,
                 components: Option[Component],
                 isDelete: Boolean,
                 createTime: Date,
                 updateTime: Date,
               )

object Page {
  implicit val pageFormat: OFormat[Page] = Json.format[Page]
}


case class Image(
                  imgUrl: String
                )

case class Carousel(
                     auto: Boolean,
                     imgList: List[String]
                   )

case class ShowCase(
                     mode: Int,
                     cells: List[ShowCaseCell]
                   )

case class ShowCaseCell(
                         url: String,
                         width: Int,
                         marginLeft: Int,
                       )

case class Notification(
                         icon: String,
                         text: String,
                       )

case class Nav(
                navNumber: Int,
                styleMode: Int,
                cells: List[NavCell]
              )

case class NavCell(
                    text: String,
                    imgUrl: String,
                  )
