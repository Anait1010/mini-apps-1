var express = require('express');
var app = express();
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser')



app.use(express.static(path.join(__dirname, 'client')));
app.listen(8080, function(err) {
  if(err) {
    console.log(err);
  }
})