var orm = require("../config/orm.js");

var burger = {

  //Read
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  //Create
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  //Update
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  //Delete
  delete: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
      cb(res);
    });
  }

};

module.exports = burger;