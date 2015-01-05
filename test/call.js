'use strict';

var assert = require('assert');
var dataModel = require('../index');

var example1 = require('./examples/call/1.json');

function clone(doc) {
  return JSON.parse(JSON.stringify(doc));
}

describe('call', function() {

  it('validates the first example', function() {
    var errors = dataModel.validate(example1);
    assert.equal(errors, null, JSON.stringify(errors));
  });
});
