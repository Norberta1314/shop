package model.dao

import config.DBConfig
import config.DBConfig.Repository
import javax.inject.Inject
import model.Page

class PageRepository @Inject()(val dBConfig: DBConfig) extends Repository {
  import dBConfig.ctx._
  val page = quote(query[Page])

  def findByShopId(id:Int) = run(quote{
    page.filter(_.shop_id == lift(id))
  }).toList

}
