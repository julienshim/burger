var express = require("express");
var methodOverride = require('method-override') //Don't think this serves a purpose, but homework instructions asks that we require it on this document.
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3333;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});