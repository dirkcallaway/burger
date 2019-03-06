var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
  burger.selectAll(function(data){
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req,res){
  burger.insertOne(req.body.burger_name, function(data){
    res.redirect("/");
  });
});

router.post("/burgers/:id", function(req, res){
  var condition = req.params.id;

  burger.updateOne(condition, function(data){
    res.redirect("/");
  });

});

module.exports = router;