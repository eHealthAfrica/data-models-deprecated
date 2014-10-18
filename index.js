'use strict'
var env = require('jjv')();

[
  'Person'
].forEach(function(type) {
  var schema = require('./schemas/'+type+'.json');
  env.addSchema(type, schema);
});

// thin wrapper in order to enforce the `doc_type` use
function validate(candidate, options) {
  if (candidate.doc_type) {
    return env.validate(candidate.doc_type, candidate, options);
  } else {
    return {
      dataModel: 'the object to be validated is missing a `doc_type` property'
    };
  }
}

module.exports = {
  validate: validate
};
