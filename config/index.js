var mysql = require("mysql2");
var connection;
require("dotenv").config();

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "paul",
    password: "password",
    database: "doctorinfo_db"
  });
}

module.exports = connection;
