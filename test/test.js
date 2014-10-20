var assert = require('assert');
var dataModel = require('../index');

var example1 = require('./examples/person/1.json');
var example2 = require('./examples/person/2.json');
var example3 = require('./examples/person/3.json');


describe('person', function() {
  
  it('validates the first example', function() {
    var errors = dataModel.validate(example1);
    assert.equal(errors, null, JSON.stringify(errors));
  });
  
  it('validates the second example', function() {
    var errors = dataModel.validate(example2);
    assert.equal(errors, null, JSON.stringify(errors));
  });
  
  it('validates the third example', function() {
    var errors = dataModel.validate(example3);
    assert.equal(errors, null, JSON.stringify(errors));
  });
  
  it('complains when required properties are missing', function() {
    var errors = dataModel.validate({});
    assert(errors && errors.length > 0);
  });
});
