var http = require('http');
var path = require('path');
var express = require('express');

var app = express();
var server = http.createServer(app);

//Sets the views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Our very own modules
 **/
var Animal = require('./Animal');

/**
 * Setting up the array
 **/
var animals = [];

var merlin = new Animal("Merlin", 100);
animals.push(merlin);

var billy = new Animal("Billy", 50);
animals.push(billy);

var no = new Animal("No", 25);
animals.push(no);

/**
 * Routing
 **/
app.get('/', (req, res) => res.render('index', { animals: animals }));

app.get('/kill', (req, res) => {
  var animal = animals[req.query.index];
  animal.kill();
  res.redirect('/');
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
});
