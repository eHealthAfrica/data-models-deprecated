'use strict';

var assert = require('assert');
var dataModel = require('../index');

var example1 = require('./examples/callback/1.json');
var example2 = require('./examples/callback/2.json');

describe('callback', function() {
  it('validates the first example', function() {
    var errors = dataModel.validate(example1);
    assert.equal(errors, null, JSON.stringify(errors));
  });
  it('validates the second example', function() {
    var errors = dataModel.validate(example2);
    assert.equal(errors, null, JSON.stringify(errors));
  });
});
