var express = require('express');
var app = express();
var path = require('path');
var multer  = require('multer');
var upload = multer();


var createFirstRowFromKeys = function(csvJSON) {
  //iterate over keys of data
  var keys = Object.keys(csvJSON).slice(0, Object.keys(csvJSON).length -1).join() + '\n';
    return keys;
};

var createRowsFromValues = function(csvJSON) {
  // iterate over values of data
  var keys = Object.keys(csvJSON);
  var keysArray = keys.slice(0, keys.length);
  var valueArray = [];
    for (var i = 0; i < keysArray.length -1; i++) {      
      valueArray.push(csvJSON[keysArray[i]]);
    }

    var valueString = valueArray.join() + '\n';
      if (csvJSON.children.length > 0) {
        for(var j = 0; j < csvJSON.children.length; j++) {
            valueString += createRowsFromValues(csvJSON.children[j]);
        }

      } else {
        // if key is empty
          return valueString;
        }
    return valueString;
};

var createCSVFromData = function(csvJSON) {
  // call createFirstRowFromKeys
  // call createRowsFromValues
  var keyRow = createFirstRowFromKeys(csvJSON);
  var valueRow = createRowsFromValues(csvJSON);
    return keyRow + valueRow;
};


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));


app.post('/fileData',upload.single('filePicker'),function (req, res) {
  // var json = JSON.parse(req.body.text);
  var json = JSON.parse(req.file.buffer); //req.file.buffer
  //console.log('json type', typeof(json))
  //console.log(createCSVFromData(json));
    

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
//res.statusCode = 404;
res.setHeader('Content-disposition', 'attachment; filename=createCSVFromData.csv');
res.setHeader('Content-Type', 'text/plain');
res.send(createCSVFromData(json));
res.send(template);
res.end();
});


//catches post request from html
app.listen(8080, function(err) {
  if (err) {
    console.log(err);
  }
});
