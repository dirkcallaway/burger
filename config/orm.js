//Require the mySQL Connection
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) {
        throw err
      };

      cb(result);
    });
  },
  insertOne: function(tableName, columnName, value, cb) {
    var queryString = "INSERT ?? (??) VALUES (?);"
    console.log(queryString);
    console.log(tableName, columnName, value);
    connection.query(queryString, [tableName, columnName, value], function(err, result) {
      if (err) {
        throw err
      };
      cb(result);
    });
  },
  updateOne: function(tableName, columnName, value, condition, cb) {
    var queryString =
      "UPDATE ?? SET ?? = ? WHERE id = ?";

    connection.query(
      queryString, [tableName, columnName, value, condition], function(err, result) {
        if (err) {
          throw err
        };
        cb(result);
      }
    );
  }
};

module.exports = orm;