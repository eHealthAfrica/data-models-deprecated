'use strict';

var fs = require('fs');
var path = require('path');

var cwd = path.join(__dirname, '/');

function isJSON(file) {
  return file.match(/.json$/);
}

function toLowerCamelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function appendToExports(file) {
  var name = toLowerCamelCase(file).replace('.json', '');
  exports[name] = require(cwd + file);
}

fs.readdirSync(cwd)
  .filter(isJSON)
  .forEach(appendToExports);
