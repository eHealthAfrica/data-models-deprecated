# Change Log

All notable changes to this project will be documented in this
file. This file is structured according to http://keepachangelog.com/

- - -

## [1.3.2] - 2015-01-05
### Changed
- removed the `call` model, now merged with the `case` model, which
  represented the same type of documents. technically a breaking
  change, but the `call` model is not used anywhere
- `contact` is now mandatory in a case. all known components are
  already writing it

## [1.3.1] - 2015-01-05
### Fixed
- updated the distribution files

## [1.3.0] - 2015-01-05
### Added
- `call` schema

## [1.2.3] - 2014-12-23
### Added
- Add 'mg' as allowed contry code

## [1.2.2] - 2014-12-19
### Added
- Product storage attribute

## [1.2.1] - 2014-12-19
### Fixed
- distribution files *actually* exposing the model as a global variable

## [1.2.0] - 2014-12-19
### Added
- distribution files exposing the validator as a global variable

## [1.1.0] - 2014-12-18
### Added
- id and name properties in Person.contact.sourceCases. This would be
  a breaking change but that software is not in production yet
