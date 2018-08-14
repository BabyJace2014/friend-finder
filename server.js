// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express Configuration

// Tells node we are creating an express server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle the data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Router
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " = PORT);
});