'use strict';

var fs = require('fs');
var path = require('path');

var fileDir = process.argv[2];
var fileFormat = process.argv[3];

fs.readdir(fileDir, function (err, list) {
  for (var fileName of list ) {
    if (path.extname(fileName) == '.' + fileFormat) {
      console.log(fileName);
    }
  }
});
