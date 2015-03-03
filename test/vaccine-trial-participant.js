'use strict';

var assert = require('assert');
var dataModel = require('../index');
var example1 = require('./examples/vaccine-trial-participant/1.json');
var example2 = require('./examples/vaccine-trial-participant/2.json');

describe('vaccineTrialParticipant', function() {
  it('validates valid example succesfully', function() {
    var errors = dataModel.validate(example1);
    assert.equal(errors, null, JSON.stringify(errors));
  });
});
