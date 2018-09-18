// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

// Open Server
var port = process.env.PORT || 3000;
app.listen(port);