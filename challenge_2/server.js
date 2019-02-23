var express = require('express');
var app = express();
var path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));


app.post('/fileData',function (req, res) {


var template = 
`
<body>
    <h1> CSV Report Generator </h1>
      <form id = 'form' method = 'POST' action = '/fileData'> 
        <textarea name = 'text' placeholder='Enter CSV data'></textarea>
        <input type ='submit' value='Submit'>
      </form>
  </body>
`
//console.log('template', template)
res.send(template);
res.end();
});



//catches post request from html
app.listen(8080, function(err) {
  if (err) {
    console.log(err);
  }
});
