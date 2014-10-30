'use strict';

var semver = require('semver-regex');
var ZSchema = require('z-schema');

ZSchema.registerFormat('semver', function(str) {
  return semver().test(str);
});

var validator = new ZSchema();
var schema = require('./schemas/Person.json');


// thin wrapper in order to make validation more convenient
function validate(candidate) {
  var valid = validator.validate(candidate, schema);
  var errors = validator.getLastErrors();
  return errors;
}

module.exports = {
  validate: validate
};
