var fs = require('fs');
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname)));
app.post('/', function (req, res, next) {
  console.log(JSON.stringify(req.headers));
  req.pipe(fs.createWriteStream('./'+req.headers['file-name']));
  req.on('end', next);
});

app.listen(process.env.PORT || 3000);
