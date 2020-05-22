package config

import java.io.Closeable

import io.getquill.{MysqlJdbcContext, SnakeCase}
import javax.inject.{Inject, Singleton}
import javax.sql.DataSource
import play.api.db.Database

@Singleton
class DBConfig @Inject() (database: Database) {
  val ctx = new MysqlJdbcContext[SnakeCase](SnakeCase, database.dataSource.asInstanceOf[DataSource with Closeable])
}

object DBConfig {
  trait Repository {
    val dBConfig: DBConfig
  }
}
