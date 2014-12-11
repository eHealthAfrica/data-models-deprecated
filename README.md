[![Build Status](https://magnum.travis-ci.com/eHealthAfrica/data_model.svg?token=eprxeztvNYMY2wzhLC7X&branch=master)](https://magnum.travis-ci.com/eHealthAfrica/data_model)

# Standard Data Models

This repository provides examples and validators for data models that
we want to share through different eHealth projects

JSON schema docs: http://json-schema.org

## API

### `validate`

Add the dependency from the module, then use the provided `validate`
method. For example if you want to validate a `Person` object:

```js
var dataModel = require('data-model');
var person = { ... };
var errors = dataModel.validate(person);
```

If the object is valid, errors should be `null`.

### `generate`

Given an optional list of model names (and count), generate an instance with
pre-filled pseudo data:

```js
var dataModel = require('data-model');
dataModel.generate('driver', 1);
// =>
// { driver:
//   [ { doc_type: 'driver',
//       version: 1,
//       forename: 'Wade',
//       surname: 'Jacobi',
//       email: 'Lexi_Mosciski95@gmail.com',
//       phone: '1-264-961-1978' } ] }
```

## CLI

A command line interface to the [generate](#generate) function (stringified as
JSON) can be useful for generating fixtures, for example:

```shell
data-model --model driver --count 1
```

Yields:

```json
{
  "driver": [
    {
      "doc_type": "driver",
      "version": 0,
      "forename": "Jeremie",
      "surname": "Bayer",
      "email": "Daisy98@gmail.com",
      "phone": "(958) 420-7636 x656"
    }
  ]
}
```

See `data-model --help` for further usage.

## Author

© 2014 [eHealth Africa](http://ehealthafrica.org)
