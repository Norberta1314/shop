package model.dao

import config.DBConfig
import config.DBConfig.Repository
import javax.inject.Inject
import model.Page

class PageRepository @Inject()(val dBConfig: DBConfig) extends Repository {

  import dBConfig.ctx._

  val page = quote(query[Page])

  def findByShopId(id: Int) = run(quote {
    page.filter(_.shopId == lift(id))
  }).toList

  def findById(id: Int) = run(quote {
    page.filter(_.id == lift(id))
  }).headOption

  def updateById(id: Int, data: Page) = run(quote {
    page.filter(_.id == lift(id))
      .update(
        _.title -> lift(data.title),
        _.styleType -> lift(data.styleType),
        _.components -> lift(data.components),
        _.backgroundColor -> lift(data.backgroundColor))
  })
}
