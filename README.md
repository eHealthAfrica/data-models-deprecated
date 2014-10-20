[![Build Status](https://magnum.travis-ci.com/eHealthAfrica/data_model.svg?token=eprxeztvNYMY2wzhLC7X&branch=master)](https://magnum.travis-ci.com/eHealthAfrica/data_model)

# Standard Data Models

This repository provides examples and validators for data models that
we want to share through different eHealth projects

JSON schema docs: http://json-schema.org

## How to use this

Add the dependency from the module, then use the provided `validate`
method. For example if you want to validate a `Person` object:

    var dataModel = require('data-model');
    var person = { ... };
    var errors = dataModel.validate(person);

If the object is valid, errors should be `null`.
