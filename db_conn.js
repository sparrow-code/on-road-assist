var mysql = require('mysql');

//import { promisify } from "util";

var util = require('util');

var db_host = process.env.DB_HOST ,
  db_user = process.env.DB_USER ,
  db_password = process.env.DB_PASSWORD ,
  db_port = process.env.DB_PORT ,
  db_name = process.env.DB_name ;

var pool = mysql.createPool({
  host: db_host,
  user: db_user,
  password: db_password,
  port: db_port,
  database: db_name
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database Connection was Closed")
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database Has Too many connections")
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database Connection was refused")
    }
  }

  if (connection) connection.release();
  console.log("Database is Connected")

})

pool.query = util.promisify(pool.query);

module.exports = pool;
