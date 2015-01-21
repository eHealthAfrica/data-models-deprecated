'use strict';

var assert = require('assert');
var dataModel = require('../index');
var example1 = require('./examples/ebola-call-centre-user/1.json');


describe('ebola-call-centre-user', function() {

  it('validates the first example', function() {
    var errors = dataModel.validate(example1);
    assert.equal(errors, null, JSON.stringify(errors));
  });

  it('complains when required properties are missing', function() {
    var errors = dataModel.validate({});
    assert(errors && errors.length > 0);
  });

});
