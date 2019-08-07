"use strict";

const mysql = require("mysql");

const config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "fs-bnb-1"
};

var connection = mysql.createConnection(config);
connection.connect(function(err) {
  if (err) console.log(err);
  console.log("Database Connected: " + config.host + ":" + config.port);
});

// OR:
// var connection = mysql.createConnection(config);
// var callBack = function(err) {}
//   if (err) console.log(err);
//   console.log("Database Connected: " + config.host + ":" + config.port);
// };
//
// callBack;
// 
// callBack("some error");
// connection.connect(callBack)


module.exports = connection;
// ^ export so you can use it in other files
// imported in user-model.js as mysqlConn