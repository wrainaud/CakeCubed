var express = require("express");
var exphbs = require("express-handlebars");
var path = require('path');
var bodyParser = require("body-parser");
var favicon = require('serve-favicon');
var methodOverride = require("method-override");
var errorHandler = require("errorhandler");
var db = require("./models");


var app = express();
var PORT = process.env.PORT || 3000;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use(express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname + "/public/assets/", "favicon.ico")))

var routes = require("./controllers/cakesController");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.use(errorHandler());

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port:%s", PORT);
    });
});