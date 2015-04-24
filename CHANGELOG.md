# Change Log

All notable changes to this project will be documented in this
file. This file is structured according to http://keepachangelog.com/

---

## 1.14.0 - 2015-04-24
### Added
- Person: `otherNames` & `gender` is now required to match reality with Sense
  followup

### Fixed
- Updated vaccine trial participant to match new requirements
- NutritionSurvey: typo in `cluster`
- NutritionSurvey: team member relations are no longer nested

## [1.13.0] - 2015-04-14
### Added
- Person: `createdDate` is now required. Used in a view in the Sense dashboard
- Case: `callNature` 'non ebola' value
### Fixed
- NutritionSurvey: added `deviceID` spec

## [1.12.1] - 2015-03-26
### Fixed
- Remove Bower private flag

## [1.12.0] - 2015-03-26
### Added
- Require Case schema `version`
- Add Case schema `contact.`: `category`, `address`
- Add Case schema `patient.`: `id`, `status`, `gender`, `age`, `patientName`, `phoneNo`, `address`
- Make Case schema `location.adminDivision.id` a union type, adding `number`
- NutritionSurvey schema

### Changed
- Remove deprecated `[contact|patient].adminDivision` properties from Case schema


## [1.11.0] - 2015-03-17
### Added
- `id` in `case` for the source case id
- `contact.preferredLanguages` as array in `case`
- Mandatory foreign key `personId` on `person.contact.sourceCases`
- Add multiple patients per call feature fields to `case` (`sameCallPatients` and `callId`)
- `patient.household.child`, `patient.household.pregnantWoman`, and `patient.household.disabledPerson` on `case` schema

### Changed
- `relative` belongs to the Person now, not just the Case. This is not
  breaking, the field is currently not used in Sense and in Sense
  dashboard
- Remove human readable `id` from items in `person.contact.sourceCases`


## [1.10.0] - 2015-03-03
- In `Case` schema `patient.adminDivision[level]` and `contact.adminDivision[level]`
can be either a number or a string
- Add `VaccineTrialParticipant` schema
- Define schema domain and version:
  - `https://schema.ehealthafrica.org/1.0`
- Configure validator to return `https://schema.ehealthafrica.org/1.0/Image.json` from file system

## [1.9.0] - 2015-03-03
### Added
- Add `Image` schema
- Move call fields out of `contact`, update mandatory fields and add
some missing fields on `Case` schema.
- Add new location fields to `Case` schema.
- Add root level healthworker object (contains isHealthWorker boolean and facilityName string)
- Add root level isHeadOfHousehold boolean
- Add in contact object, a relationToCase string

### Changed
- `name` of a `sourceCase` should be stored within the regular person
object and not within the `contact` attribute. Please migrate to `otherNames`
and `surname`.
- `phone` of a `sourceCase` should be stored within the regular person
object and not within the `contact` attribute. Please migrate to `phoneNumber`.

### Fixed
- removed `referenceNumber` from the Person schema. It was not used anywere
- fixed deref to version 0.2.6. Higher version was breaking the doc 'generate' functionality


## [1.8.0] - 2015-02-19
### Added
- Add `category` field to `Person.age`
- Add `incompleteReasons` to `Person.contact.followUps`
- Add `status` to `Person.contact.followUps`
- Add `fever` to `definitions.symptoms` schema

## [1.7.0] - 2015-02-10
### Added
- Add `sl` country code to validation pattern for Person.address


## [1.6.0] - 2015-01-29
### Added
- `EbolaCallCentreUser` schema
- Person schema
  - `phone` property in sources
  - `interviewer` moved to `connectedPerson` to be re-usable
  - `relative` of source case, is a `connectedPerson`
  - `red_eyes` and `other_symptoms` as accepted symptoms
### Changed
- Person schema
  - `interviewer` is of type `connectedPerson`
  - `leader` is of type `connectedPerson`

## [1.5.0] - 2015-01-15
### Added
- `leader` property in a case management `Person` schema
- `city` property in a case management `Person` schema
- `exposure` property in sources within a `Person` schema

## [1.4.0] - 2015-01-08
### Changed
- specify the possible values for `case.contact.callNature`
- `case.contact.callNature` is now required

I am not marking this as a breaking change, in the belief that our
data is already compliant to the new schema

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

[unreleased]: https://github.com/eHealthAfrica/data-models/compare/1.12.1...HEAD
[1.12.1]: https://github.com/eHealthAfrica/data-models/compare/1.12.0...1.12.1
[1.12.0]: https://github.com/eHealthAfrica/data-models/compare/1.11.0...1.12.0
[1.11.0]: https://github.com/eHealthAfrica/data-models/compare/1.10.0...1.11.0
[1.10.0]: https://github.com/eHealthAfrica/data-models/compare/1.9.0...1.10.0
[1.9.0]: https://github.com/eHealthAfrica/data-models/compare/1.8.0...1.9.0
[1.8.0]: https://github.com/eHealthAfrica/data-models/compare/1.7.0...1.8.0
[1.7.0]: https://github.com/eHealthAfrica/data-models/compare/1.6.0...1.7.0
[1.6.0]: https://github.com/eHealthAfrica/data-models/compare/1.5.0...1.6.0
[1.5.0]: https://github.com/eHealthAfrica/data-models/compare/1.4.0...1.5.0
[1.4.0]: https://github.com/eHealthAfrica/data-models/compare/1.3.2...1.4.0
[1.3.2]: https://github.com/eHealthAfrica/data-models/compare/1.3.1...1.3.2
[1.3.1]: https://github.com/eHealthAfrica/data-models/compare/1.3.0...1.3.1
[1.3.0]: https://github.com/eHealthAfrica/data-models/compare/1.2.2...1.3.0
[1.2.2]: https://github.com/eHealthAfrica/data-models/compare/1.2.1...1.2.2
[1.2.1]: https://github.com/eHealthAfrica/data-models/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/eHealthAfrica/data-models/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/eHealthAfrica/data-models/compare/1.0.0...1.1.0
