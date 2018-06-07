var connection = require("../config/connection.js");
var processing = require("../public/assets/javascript/modules/processing.js");

var orm = {

  //Read
  all: function(tableInput, cb) { // `selectAll()` 
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //Create
  create: function(table, cols, vals, cb) {

    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += processing.printQuestionMarks(vals.length); //Function Stored in JS Module
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //Update
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += processing.objToSql(objColVals); //Function Stored in JS Module
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //Delete
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;

    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};

module.exports = orm;
