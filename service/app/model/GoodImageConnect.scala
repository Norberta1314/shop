package model

import java.util.Date

import play.api.libs.json.{Format, Json}

case class GoodImageConnect(
                             id: Int,
                             goodId: Int,
                             ImageId: String,
                             isDelete: Option[Boolean],
                             createTime: Option[Date],
                             updateTime: Option[Date],
                           )

object GoodImageConnect {
  implicit val goodImageConnectFormat = Json.format[GoodImageConnect]
}
