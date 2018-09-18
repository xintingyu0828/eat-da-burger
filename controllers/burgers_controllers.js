
// Dependencies
var express = require('express');
var app = express();
var burger = require('../models/burger.js');


// Create routes
app.get('/', function (req, res) {
  res.redirect('/index');
});



app.get('/index', function (req, res) {
   res.send('/index');
  });


// Create a New Burger
app.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});


// Devour a Burger
app.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = app;