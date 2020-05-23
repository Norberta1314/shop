name := "service"

version := "1.0"

lazy val `service` = (project in file(".")).enablePlugins(PlayScala)

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"

resolvers += "Akka Snapshot Repository" at "https://repo.akka.io/snapshots/"

scalaVersion := "2.12.2"

libraryDependencies ++= Seq( jdbc , ehcache , ws , specs2 % Test , guice,
  "io.getquill" %% "quill-jdbc" % "3.5.1",
  "mysql" % "mysql-connector-java" % "5.1.49"
)
//unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )

