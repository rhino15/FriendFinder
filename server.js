//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up express app
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Using node require to grap the necessary code to route for various requests
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


//This starts the server
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});

