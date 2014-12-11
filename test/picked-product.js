'use strict';

var assert = require('assert');
var dataModel = require('../index');

var example1 = require('./examples/picked-product/1.json');

describe('pickedProduct', function() {
  it('validates the first example', function() {
    var errors = dataModel.validate(example1);
    assert.equal(errors, null, JSON.stringify(errors));
  });
});
