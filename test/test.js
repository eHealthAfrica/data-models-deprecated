var assert = require('assert');
var dataModel = require('../index');

var example1 = require('./examples/person/1.json');
var example2 = require('./examples/person/2.json');
var example3 = require('./examples/person/3.json');
var exampleRequiredLength = clone(example1);
var exampleUndefined = clone(example1);


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

  it('complains when required property length is not valid', function() {
    exampleRequiredLength.surname = ''; //length is 0
    var errors = dataModel.validate(exampleRequiredLength);
    assert(errors && errors.length > 0);
  });

  it('complains when a key of type number is undefined', function() {
    exampleUndefined.age = undefined;
    var errors = dataModel.validate(exampleUndefined);
    assert(errors && errors.length > 0);
  });

  it('validates if the key of type number is deleted', function() {
    delete exampleUndefined.age;
    var errors = dataModel.validate(exampleUndefined);
    assert.equal(errors, null, JSON.stringify(errors));
  });
});

function clone(doc) {
  return JSON.parse(JSON.stringify(doc));
}
