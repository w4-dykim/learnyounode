'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (dir, format, callback) {
  fs.readdir(dir, function (err, fileList) {
    if (err) {
      return callback(err);
    }

    fileList = fileList.filter(function (file) {
      return path.extname(file) === '.' + format;
    });

    callback(null, fileList);
  })
}
