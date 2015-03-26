'use strict';

var assert = require('assert');
var dataModel = require('../index');

var example1 = require('./examples/nutrition-survey/1.json');
var example2 = require('./examples/nutrition-survey/2.json');

describe('nutrition-survey', function() {
  it('validates the first example', function() {
    var errors = dataModel.validate(example1);
    assert.equal(errors, null, JSON.stringify(errors, null, 2));
  });

  it('handles teams indexed by a team leader', function() {
    var errors = dataModel.validate(example2);
    assert.equal(errors, null, JSON.stringify(errors, null, 2));
  });
});
