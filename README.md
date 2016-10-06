# DEPRECATED

This repo is deprecated.

It should not be removed since for Call Center the data model module is currently used in integration tests.

There have been discussions around keeping a shared data-models module and have leave models external (e.g. in the call center repo) and to make them extendable. For now it was decided against since in most parts the data models are not up to date and hardly used.

For more information see https://jira.ehealthafrica.org/browse/CCSL-1583

---


# Data Models

[![Build Status][travis-image]][travis-url]

[travis-url]: https://travis-ci.org/eHealthAfrica/data-models
[travis-image]: https://travis-ci.org/eHealthAfrica/data-models.svg?branch=master

> Validation for standard data models

This repository provides examples and validators for data models that
we want to share through different eHealth projects

JSON schema docs: http://json-schema.org


## Attention developers!

This is open software. If you need realistic data for your tests you
can either forge them or generate them automatically with the command
line tool (see below). Improving the generator is also a way to
improve the data model.

## How to add a data model

Grab an example of your document and add it to `tests/examples`. Add
its schema under `schemas`. Add the corresponding entry in
`schemas/index.js`, and maybe, why not? Some documentation under
`doc`.

The lame, final part is to copy and adapt one of the `.js` files under
`tests` in order to load your examples, at this point you should be
able to succesfully run the tests!

If you are planning to do a new release, have a look at [how to
build](#for-client-side-code)

## Schema Domain

Until such a time upon which we decide on something better, the current schema domain is `schema.ehealthafrica.org` and the current stable version is `1.0`. e.g:

```
https://schema.ehealthafrica.org/1.0/Image.json#
```

## API

### `validate`

Add the dependency from the module, then use the provided `validate`
method. For example if you want to validate a `Person` object:

```js
var dataModel = require('data-models');
var person = { ... };
var errors = dataModel.validate(person);
```

If the object is valid, errors should be `null`.

### `generate`

Given an optional list of model names (and count), generate an instance with
pre-filled pseudo data:

```js
var dataModel = require('data-models');
dataModel.generate('driver', 1);
// =>
// { driver:
//   [ { doc_type: 'driver',
//       version: '1.0.0',
//       forename: 'Wade',
//       surname: 'Jacobi',
//       email: 'Lexi_Mosciski95@gmail.com',
//       phone: '1-264-961-1978' } ] }
```

## CLI

A command line interface to the [generate](#generate) function (stringified as
JSON) can be useful for generating fixtures, for example:

```shell
data-models --model driver --count 1
```

Yields:

```json
{
  "driver": [
    {
      "doc_type": "driver",
      "version": "1.0.0",
      "forename": "Jeremie",
      "surname": "Bayer",
      "email": "epiwam@gmail.com",
      "phone": "(958) 420-7636 x656"
    }
  ]
}
```

See `data-model --help` for further usage.

## For client side code

A bundled version is available in the `dist/` folder. The files there
have been built with Browserify using the `--standalone` option, so
they will expose a global `dataModel` object.

Remember to run `npm run build` before tagging a new release of this
code in order to update the distribution files.


## License

Copyright 2015 [eHealth Africa](http://ehealthafrica.org)

Licensed under the Apache License, Version 2.0 (the "License"); you
may not use this file except in compliance with the License.  You may
obtain a copy of the License [here](/LICENSE).

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied.  See the License for the specific language governing
permissions and limitations under the License.
