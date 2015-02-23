'use strict';

var assert = require('assert');
var dataModel = require('../index');
var example1 = require('./examples/image/1.json');
var example2 = require('./examples/image/2.json');

describe('image', function() {
  it('validates valid example succesfully', function() {
    var errors = dataModel.validate(example1);
    assert.equal(errors, null, JSON.stringify(errors));
  });

  it('throws validation errors on invalid example', function() {
    var errors = dataModel.validate(example2);
    console.log(errors);
    assert.equal(errors.length, 2);
    assert.equal(errors[0].code, 'OBJECT_MISSING_REQUIRED_PROPERTY');
    assert.equal(errors[0].params[0], 'mimeType');
    assert.equal(errors[1].code, 'OBJECT_MISSING_REQUIRED_PROPERTY');
    assert.equal(errors[1].params[0], 'data');
  });
});
