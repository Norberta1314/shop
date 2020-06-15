package model.dao

import config.DBConfig
import config.DBConfig.Repository
import javax.inject.Inject
import model.Good

class GoodRepository @Inject()(val dBConfig: DBConfig) extends Repository {

  import dBConfig.ctx._

  val good = quote(query[Good])

  def insert(data: Good) = run(quote {
    good
      .insert(_.title -> lift(data.title),
        _.price -> lift(data.price),
        _.stock -> lift(data.stock),
        _.imgUrl -> lift(data.imgUrl),
        _.info -> lift(data.info),
        _.brand -> lift(data.brand),
        _.shopId -> lift(data.shopId))
      .returningGenerated(_.id)
  })

  def findByShopId(id: Int) = run(quote {
    good.filter(_.shopId == lift(id))
  }).toList

  def updateById(id: Int, data: Good) = run(quote {
    good.filter(_.id == lift(id))
      .update(
        _.title -> lift(data.title),
        _.price -> lift(data.price),
        _.stock -> lift(data.stock),
        _.brand -> lift(data.brand),
        _.info -> lift(data.info),
        _.imgUrl -> lift(data.imgUrl)
      )
  })

  def findListByIds(ids: List[Int]) = run(quote {
    good.filter(p => liftQuery(ids).contains(p.id))
  })

  def findById(id: Int) = run(quote {
    good.filter(_.id == lift(id))
  }).headOption
}
