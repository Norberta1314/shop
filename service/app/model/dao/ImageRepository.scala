package model.dao

import config.DBConfig
import config.DBConfig.Repository
import javax.inject.Inject
import model.Image

class ImageRepository @Inject()(val dBConfig: DBConfig) extends Repository {

  import dBConfig.ctx._

  val image = quote(query[Image])

  def insertImage(name: String) = run(quote {
    image.insert(_.name -> lift(name)).returningGenerated(_.id)
  })
}
