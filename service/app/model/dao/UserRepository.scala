package model.dao

import config.DBConfig
import config.DBConfig.Repository
import javax.inject.Inject
import model.User

class UserRepository @Inject()(val dBConfig: DBConfig) extends Repository{
  import dBConfig.ctx._
  val user = quote(query[User])

  def findById(id: Int) = run(quote{
    user.filter(_.id == lift(id))
  }).headOption
}
