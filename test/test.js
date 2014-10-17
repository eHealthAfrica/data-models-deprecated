var assert = require('assert'),
    dataModel = require('../index');

describe('person', function() {
  var example;
  beforeEach(function() {
    example = require('./examples/person/1.json');
  });
  it('validates the first example', function() {
    var errors = dataModel.validate(example);
    assert.equal(errors, null, 'Errors are '+JSON.stringify(errors));
  });
  it('complains when the doc_type is missing', function() {
    var errors = dataModel.validate({wrong: 'stuff'});
    assert.equal(
      errors.dataModel,
      'the object to be validated is missing a `doc_type` property'
    );
  });
  it('complains when the doc_type has an unknown value', function() {
    assert.throws(function() {
      dataModel.validate({any: 'shit', doc_type: 'cat'});
    }, /could not find schema 'cat'/);
  });
  it('complains when required fields are missing', function() {
    var errors = dataModel.validate({wrong: 'stuff', doc_type: 'Person'});
    assert.equal(errors.validation.surname.required, true);
  });
  it('supports validation options', function() {
    var candidate = { wrong: 'stuff', doc_type: 'Person'};
    var validationOptions = {
      checkRequired: false,
      removeAdditional: true
    };
    var errors = dataModel.validate(candidate, validationOptions);
    assert.equal(errors, null, 'Errors are '+JSON.stringify(errors));
    assert.equal(candidate.wrong, null);
  });
});
