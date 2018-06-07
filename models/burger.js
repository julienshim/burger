var orm = require("../config/orm.js");

var burger = {

  //Read
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  //Create
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  //Update
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  //Delete
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }

};

module.exports = burger;