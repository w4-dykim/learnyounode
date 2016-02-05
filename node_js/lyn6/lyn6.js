'use strict';

var fs = require('fs');
var path = require('path');

var fileDir = process.argv[2];
var fileFormat = process.argv[3];

fs.readdir(fileDir, function (err, fileList) {
  for (var fileName of fileList) {
    console.log(fileName);
  }
})
