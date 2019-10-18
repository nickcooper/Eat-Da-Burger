// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  create: function(burger, cb) {
    orm.insertOne(burger, function(res) {
      cb(res);
    });
  },
  update: function(burger, id, cb) {
    orm.updateOne(burger, id, function(res) {
      cb(res);
    });
  },
  delete: function(id, cb) {
    orm.delete(id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;