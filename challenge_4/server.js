var express = require('express');
var app  = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'/public/index.html'))
});



app.listen(8080, function(err) {
  if (err) {
    console.log('error', err);
  }
});

