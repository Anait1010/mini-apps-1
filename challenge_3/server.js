var express = require('express');
var app = express();
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser')


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'/public/index.html'))
  //res.send('Hello from server');
});

app.post('/formTwo', function(req,res) {
  console.log('req.body------->', req.body.name);
});
app.post('/formThree', function(req,res) {
  console.log('req.body------->', req.body);
});
app.post('/confirmationForm', function(req,res) {
  console.log('req.body------->', req.body);
});
app.listen(3000, function(err) {
  if(err) {
    console.log(err);
  }
  //console.log('Server is listening');
})