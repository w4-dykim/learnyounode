'use strict';

var lyn6Mod = require('./lyn6_module.js');

var fileDir = process.argv[2];
var fileFormat = process.argv[3];

lyn6Mod(fileDir, fileFormat, function (err, fileList) {
  if (err) {
    return console.error(err);
  }

  fileList.forEach(function(fileName) {
    console.log(fileName);
  });
});
