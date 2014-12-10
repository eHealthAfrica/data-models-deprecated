'use strict';

var semver = require('semver-regex');
var ZSchema = require('z-schema');

ZSchema.registerFormat('semver', function(str) {
  return semver().test(str);
});

var validator = new ZSchema();
var schemas = {
  person: require('./schemas/Person.json'),
  case: require('./schemas/Call.json'),
  driver: require('./schemas/Driver.json'),
  deliveryRound: require('./schemas/DeliveryRound.json')
};

// thin wrapper in order to make validation more convenient
function validate(candidate) {
  if (candidate.doc_type) {
    var schema = schemas[candidate.doc_type];
    validator.validate(candidate, schema);
    var errors = validator.getLastErrors();
    return errors;
  }

  return [{
    dataModel: 'the object to be validated is missing a `doc_type` property'
  }];
}

module.exports = {
  validate: validate
};
