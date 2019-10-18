// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers;", function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    insertOne: function(burgerObj, cb) {
        connection.query("INSERT INTO burgers SET ?", [burgerObj], function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    },
    updateOne: function(burgerObj, id, cb) {
        connection.query("UPDATE burgers SET ? WHERE id = ?", [burgerObj, id], function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    },
    delete: function(id, cb) {
        connection.query("DELETE FROM burgers WHERE id = ?", [id], function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    }
};

// Export the orm object for the model.
module.exports = orm;