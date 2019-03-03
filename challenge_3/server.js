var express = require('express');
var app = express();
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser')


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.get('/checkout', function(req, res) {
  res.sendFile(path.join(__dirname,'/public/index.html'))
  //res.send('Hello from server');
});

app.get('/formOne', function(req,res) {
  db.query('INSERT INTO userInfo (id) VALUES (null)', function(err, data) {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log(null, data)
    }
  });
  res.sendStatus(200)
});

app.post('/formTwo', function(req,res) {
  console.log('req.body------->', req.body);
  // db.query('UPDATE userInfo SET name = ?,email = ?, password = ? WHERE id = LAST_INSERT_ID()',
  //   [req.body.name, req.body.email,req.body.password], function(err, data) {
  db.query('INSERT INTO userInfo (name, email, password) VALUES (?,?,?)',
    [req.body.name, req.body.email,req.body.password], function(err, data) {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log(null, data)
    }
  });
  res.end();
});
app.post('/formThree', function(req,res) {
  //console.log('req.body------->', req.body);
  db.query('UPDATE userInfo SET addressOne = ?, addressTwo = ?,city = ?, state = ?,zipCode = ?,phoneNumber = ? WHERE id = LAST_INSERT_ID()',
  [req.body.addressOne, req.body.addressTwo,req.body.city, req.body.state, req.body.zipCode,req.body.phoneNumber], function(err, data) {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log(null, data)
    }
  });
  res.end();
});
app.post('/confirmationForm', function(req,res) {
  //console.log('req.body------->', req.body);
  db.query('UPDATE userInfo SET creditCard = ?, exp = ?, cvv = ?,billingZip = ? WHERE id = LAST_INSERT_ID()',
  [req.body.creditCard, req.body.exp, req.body.cvv, req.body.billingZip], function(err, data) {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log(null, data)
    }
  });
  res.end();
});

app.listen(8080, function(err) {
  if(err) {
    console.log(err);
  }
  //console.log('Server is listening');
})
//Create database connection
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

db.connect(function (err) {
  if (err) {
    console.log('Error ', err);
  } else {
    console.log('Database is connected');
  }
});
//Create database checkoutForm
db.query('CREATE DATABASE IF NOT EXISTS checkoutForm', function(err, data) {
  if (err) {
    console.log('ERROR', err)
  } else {
    console.log(null, data)
  }
});

db.query('USE checkoutForm', function(err, data) {
  if (err) {
    console.log('ERROR', err)
  } else {
    console.log(null, data)
  }
});

//Create a table for form information
db.query('CREATE TABLE IF NOT EXISTS userInfo (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name CHAR(30), email CHAR(20), password CHAR(14), addressOne CHAR(30), addressTwo CHAR(30), city CHAR(20), state CHAR(15), zipCode CHAR(10), phoneNumber CHAR(12), creditCard CHAR(20), exp CHAR(4), cvv CHAR(5), billingZip CHAR(5))', function(err,data) {
  if (err) {
    console.log('ERROR', err)
  } else {
    console.log(null, data)
  }
})