# Standard Data Models

This repository provides examples and validators for data models that
we want to share through different eHealth projects

Check the [jjv doc][jjv] in order to have more info about how to
specify a schema.

## How to use this

Add the dependency from the module, then use the provided `validate`
method. For example if you want to validate a `Person` object:

    var dataModel = require('data-model');
    var person = { ... };
    var errors = dataModel.validate(person);

If the object is valid, errors should be `null`.

[jjv]: https://github.com/acornejo/jjv