'use strict';

var semver = require('semver-regex');
var ZSchema = require('z-schema');
var jsf = require('json-schema-faker');

var schemas = require('./schemas');

ZSchema.registerFormat('semver', function(str) {
  return semver().test(str);
});

var validator = new ZSchema();

/**
 * Thin wrapper to make validation more convenient
 *
 * @param {Object} candidate A model instance to validate
 * @return {[Error]} A list of errors or null
 */
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

/**
 * Generate instances populated with pseudo random data
 *
 * @param {(String|[String])} model An optional model or list of models
 * @param {Number} count An optional number of instances to generate
 * @return {Object} A map of model-instances
 */
function generate(model, count) {
  var factory = {};
  var models = [];

  if (model) {
    models = typeof model === 'string' ? [model] : model;
  } else {
    models = Object.keys(schemas);
  }

  count = count || 1;

  function build(model) {
    var samples = [];
    for (var i = 0, len = count; i < len; i++) {
      samples.push(jsf(schemas[model]));
    }
    factory[model] = samples;
  }

  models.forEach(build);
  return factory;
}

module.exports = {
  generate: generate,
  validate: validate
};
