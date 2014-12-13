'use strict';

var semver = require('semver-regex');
var ZSchema = require('z-schema');
var jsf = require('json-schema-faker');

var schemas = require('./schemas');

ZSchema.registerFormat('semver', function(str) {
  return semver().test(str);
});

jsf.formats('semver', function(gen) {
  return gen.randexp(/\d\.\d\.\d/);
});

var draft = {
  url: 'http://json-schema.org/draft-04/schema',
  schema: 'draft-04'
};

var validator = new ZSchema();
validator.setRemoteReference(draft.url, schemas[draft.schema]);

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
  count = count || 1;
  var registry = {};
  var models = [];

  if (model) {
    models = typeof model === 'string' ? [model] : model;
  } else {
    models = Object.keys(schemas);
  }

  function build(model) {
    var instance = jsf(schemas[model]);
    var invalid = validate(instance);
    if (invalid) {
      var errors = JSON.stringify(invalid, null, 2);
      throw new Error('Invalid "' + model + '" instance:\n' + errors);
    }
    return instance;
  }

  function factory(model) {
    var instances = [];
    for (var i = 0, len = count; i < len; i++) {
      var instance = build(model);
      instances.push(instance);
    }
    registry[model] = instances;
  }

  models.forEach(factory);
  return registry;
}

module.exports = {
  generate: generate,
  validate: validate
};
