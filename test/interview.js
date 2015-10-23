'use strict'
/* global it describe */

var assert = require('assert')
var dataModel = require('../index')

var example1 = require('./examples/interview/1.json')

describe('interview', function () {
  it('validates the first example', function () {
    var errors = dataModel.validate(example1)
    assert.equal(errors, null, JSON.stringify(errors))
  })

  it('fails if some required fields are missing', function () {
    var errors = dataModel.validate({
      /* eslint-disable camelcase */
      doc_type: 'interview'
    /* eslint-enable camelcase */
    })
    var hasErrors = errors.length > 0
    assert.equal(hasErrors, true, 'Interview schema is missing required fields')
  })
})
