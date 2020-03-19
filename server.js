var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//to run express
var app = express();

//deployment friendly to Heroku
var PORT = process.env.PORT || 3000;

//having the port listen
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost" + PORT);
});