package model

import java.util.Date
import play.api.libs.json.{Format, Json}

case class Good(
                 id: Int = 0,
                 title: String,
                 price: Int,
                 stock: Int,
                 brand: String,
                 info: String,
                 shopId: Int,
                 imgUrl: String,
                 isDelete: Option[Boolean],
                 pageView: Option[Int],
                 buyAmount: Option[Int],
                 createTime: Option[Date],
                 updateTime: Option[Date],
               )

object Good {
  implicit val goodFormat: Format[Good] = Json.format[Good]
}
