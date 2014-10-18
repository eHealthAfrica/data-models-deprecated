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

## Validation options

You can optionally specify [jjv validation options][options] as the
second argument to `validate`:

    dataModel.validate(person, { checkRequired: false });

These options allow for example to ignore the check for required
properties, or to filter properties which are not in the schema. Check
the [jjv options doc][options] for more details.

[jjv]: https://github.com/acornejo/jjv
[options]: https://github.com/acornejo/jjv#validation-options
