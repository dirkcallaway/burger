var orm = require("../config/orm.js");

// Create the burger object
var burger = {
  // Select all burger table entries
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  insertOne: function(value, cb){
    orm.insertOne('burgers', 'burger_name', value, function(res){
      cb(res);
    })
  },

  updateOne: function(condition, cb){
    orm.updateOne('burgers', 'devoured', '1', condition, function(res){
      cb(res)
    })
  }
}

module.exports = burger;