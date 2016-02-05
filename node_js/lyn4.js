'use strict';

var fs = require('fs');

function calLine(callback) {
  fs.readFile(process.argv[2], 'utf8', function (err, data) {
    var lines = data.split('\n').length - 1;
    callback(lines);
  });
}

function printLine(line) {
  console.log(line);
}

calLine(printLine);

/**
  * answer code
  *
  * var fs = require('fs')
  * var file = process.argv[2]
  *
  * fs.readFile(file, function (err, contents) {
  *   // fs.readFile(file, 'utf8', callback) can also be used
  *   var lines = contents.toString().split('\n').length - 1
  *   console.log(lines)
  * })
  */
