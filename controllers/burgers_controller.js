// Inside the `burgers_controller.js` file, import the following:
var express = require("express"); //Express
var router = express.Router();
var burger = require("../models/burger.js"); //burger.js


//Create the `router` for the app,

router.get("/", function(req, res) { //read
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });






// and export the `router` at the end of your file.
module.exports = router;