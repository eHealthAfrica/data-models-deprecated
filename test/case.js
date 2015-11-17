'use strict';

var assert = require('assert');
var dataModel = require('../index');

var example1 = require('./examples/case/1.json'),
    example2 = require('./examples/case/2.json'),
    example3 = require('./examples/case/3.json');

describe('case', function() {
  it('validates the first example', function() {
    var errors = dataModel.validate(example1);
    assert.equal(errors, null, JSON.stringify(errors));
  });
  it('validates the second example', function() {
    var errors = dataModel.validate(example2);
    assert.equal(errors, null, JSON.stringify(errors));
  });
  it('validates organisation and role', function() {
    // organization and role should be mandatory when the caller
    // category is "official". see
    // https://github.com/eHealthAfrica/sl-ebola-call-admin/issues/1084
    var errors = dataModel.validate(example3);
    assert.equal(errors, null, JSON.stringify(errors));
  });
});
