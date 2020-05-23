package utils

import play.api.libs.json.Writes._
import play.api.libs.json.{JsObject, Json, Writes}
import play.api.mvc.Results


object ResponseUtils {
  val success = 1

  val fail = -1

  def jsonOk(message: String = "ok") = jsonResponse(success, message, "")

  def jsonSuccess[T](data: T, code: Int = success)(implicit fmt: Writes[T]) = jsonResponse(code, "查询成功", data)

  def jsonFail(message: String = "fail", code: Int = fail) = jsonResponse(code, message, "")

  def jsonFailWithErrors[T](data: T, message: String = "fail", code: Int = fail)(implicit fmt: Writes[T]) = jsonResponse(code, message, data)

  def jsonResponse[T](code: Int, message: String, data: T)(implicit fmt: Writes[T]) = Results.Ok(Json.toJson(Response(code, message)).as[JsObject] + ("data" -> Json.toJson(data)))
}

case class Response(code: Int, message: String)

object Response {
  implicit def responseWrites: Writes[Response] = Json.writes[Response]
}

