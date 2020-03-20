// var express = require("express");
// var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");

// //to run express
// var app = express();

// //deployment friendly to Heroku
// var PORT = process.env.PORT || 3000;

// //static files
// app.use(express.static("public"));

// //body parse element. top part is url, bottom part is the json
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// //setting up our handlebars
// //this is our template engine
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set(: "view engine", "handlebars");

// var routes = require("./controller/burgers_controller.js");
// app.use(routes);


// //having the port listen
// app.listen(PORT, function() {
//     console.log("Server listening on: http://localhost" + PORT);
// });


var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});