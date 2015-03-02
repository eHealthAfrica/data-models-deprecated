'use strict';

var assert = require('assert');
var dataModel = require('../index');

describe('generate', function() {
  it('generates a valid person', function() {
    assert(dataModel.validate(dataModel.generate('person')));
  });
});
