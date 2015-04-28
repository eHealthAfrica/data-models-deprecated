'use strict';

var assert = require('assert');
var dataModel = require('../index');

var example1 = require('./examples/followup/1.json');

function clone(doc) {
  return JSON.parse(JSON.stringify(doc));
}

var statusRequired = clone(example1);

describe('person', function() {

  it('validates the first example', function() {
    var errors = dataModel.validate(example1);
    assert.equal(errors, null, JSON.stringify(errors));
  });

  it('complains when required properties are missing', function() {
    var errors = dataModel.validate({});
    assert(errors && errors.length > 0);
  });

  it('complains when required property is not there', function() {
    statusRequired.status = '';
    var errors = dataModel.validate(statusRequired);
    assert(errors && errors.length > 0);
  });
});
