# Data Model Examples
This is an auto generated compilation of examples from `test/examples`.
To generate this file, run:
```sh
npm run build-docs
```
## Case
### 1.json
```json
{
  "_id": "xxx",
  "_rev": "1-abcd",
  "doc_type": "case",
  "version": "1.0.0",
  "createdBy": {
    "username": "guy",
    "fullName": "Xxx Yyy"
  },
  "createdOn": "2014-11-25T12:06:13.062Z",
  "callNature": "prank call",
  "caseStatus": "open",
  "contact": {
    "doc_type": "contact",
    "phoneNo": "1234"
  },
  "patient": {
    "doc_type": "patient",
    "household": {
      "pregnantWoman": true,
      "child": true
    },
    "status": "dead",
    "symptoms": {
      "common": {
        "fever": false,
        "vomiting": false,
        "diarrhea": false,
        "weakness": false,
        "muscleOrJointPain": false,
        "bleeding": false,
        "rash": false,
        "abdominalPain": false,
        "difficultySwallowing": false,
        "headache": false,
        "hiccup": false
      },
      "other": ""
    },
    "patientName": "unknown"
  },
  "contact": {
    "phoneNo": "123",
    "location": {
      "adminDivision1": {
        "id": "E",
        "name": "east"
      },
      "adminDivision2": {
        "id": "11",
        "name": "kailahun"
      },
      "adminDivision3": {
        "id": "11-04",
        "name": "kissi teng"
      }
    }
  },
  "response": {
    "doc_type": "response"
  }
}

```


### 2.json
```json
{
  "_id": "yyy",
  "_rev": "1-135cb8ae192b198575f9191869980052",
  "doc_type": "case",
  "version": "1.0.0",
  "createdBy": {
    "username": "gin_call_user",
    "fullName": "fra"
  },
  "createdOn": "2015-01-05T11:45:59.670Z",
  "callNature": "non ebola",
  "sameCallPatients": ["xxx"],
  "callId": "xxx",
  "contact": {
    "category": "Health Worker",
    "doc_type": "contact",
    "name": "someone",
    "address": "test street, number 5",
    "phoneNo": "123456"
  },
  "patient": {
    "id": 1234,
    "doc_type": "patient",
    "status": "alive",
    "gender": "F",
    "phoneNo": "4132",
    "address": "Some Place",
    "age": {
      "years": 44,
      "months": 10,
      "category": "adult"
    },
    "symptoms": {
      "common": {
        "fever": false,
        "vomiting": false,
        "diarrhea": false,
        "weakness": false,
        "muscleOrJointPain": false,
        "bleeding": false,
        "rash": false,
        "abdominalPain": false,
        "difficultySwallowing": false,
        "headache": false,
        "hiccup": false
      },
      "other": ""
    },
    "patientName": "unknown",
    "location": {
      "adminDivision1": {
        "id": "E",
        "name": "east"
      },
      "adminDivision2": {
        "id": "11",
        "name": "kailahun"
      },
      "adminDivision3": {
        "id": "11-04",
        "name": "kissi teng"
      }
    }
  },
  "response": {
    "doc_type": "response",
    "caseStatus": "open"
  },
  "dispatch": {}
}

```


## DailyDelivery
### 1.json
```json
{
  "_id": "d8006b0524473a0a4a60b7749766a11d",
  "doc_type": "dailyDelivery",
  "version": "1.0.0",
  "deliveryRoundID": "d8006b0524473a0a4a60b7749766a11e",
  "driverID": "d8006b0524473a0a4a60b7749766a11f",
  "facilityRounds": [
    "d8006b0524473a0a4a60b7749766a11g",
    "d8006b0524473a0a4a60b7749766a11h"
  ],
  "packingLists": [
    "d8006b0524473a0a4a60b7749766a11i",
    "d8006b0524473a0a4a60b7749766a11j"
  ]
}

```


## DeliveryRound
### 1.json
```json
{
  "doc_type": "deliveryRound",
  "roundCode": "001",
  "startDate": "2014-12-10T19:00:49.770Z",
  "endDate": "2014-12-11T19:00:49.770Z",
  "completedOn": "2014-12-11T19:00:49.770Z",
  "status": "?",
  "lag": false
}

```


## Driver
### 1.json
```json
{
  "_id": "abdullahi.ahmed@example.com",
  "_rev": "1-24d7258aa284524d083ab1ff2f4bc997",
  "doc_type": "driver",
  "version": "1.0.0",
  "forename": "Abdullahi",
  "surname": "Ahmed",
  "email": "abdullahi.ahmed@example.com",
  "phone": "+2340000000"
}

```


## EbolaCallCentreUser
### 1.json
```json
{
  "_id": "org.couchdb.user:schema-test-1",
  "_rev": "20-68bcecfed0925174e22eba6829251a11",
  "password_scheme": "pbkdf2",
  "iterations": 10,
  "name": "schema-test-1",
  "roles": [
    "role1",
    "role2"
  ],
  "details": {
    "fullName": "Schmea Test 1",
    "role": "Role",
    "app": "Application Title"
  },
  "type": "user",
  "doc_type": "ebolaCallCentreUser",
  "derived_key": "xxx",
  "salt": "yyy",
  "locations": [
    {
      "name": "Location 1",
      "id": "L",
      "level": 0
    },
    {
      "name": "Location 2",
      "id": "O",
      "level": 0
    }
  ]
}

```


## FacilityRound
### 1.json
```json
{
  "doc_type": "facilityRound",
  "version": "1.0.0",
  "orderID": "54b1a77f60b10a358beeb8d305001cd2",
  "facility": "Kano Facility",
  "status": "?",
  "note": "Left with manager",
  "deliveryPeriod": "?",
  "departedAt": "2014-12-11T19:00:49.770Z",
  "arrivedAt": "2014-12-12T19:00:49.770Z",
  "pickedProducts": [
    "54b1c77f60b10a358beeb8d305001cd2",
    "54b1c77f60b10a358beeb8d305001cg8",
    "54b1c77f60b10a358beeb8d305001cp0"
  ],
  "survey": []
}

```


## Followup
### 1.json
```json
{
  "_id": "7cdbd7e2-523a-4c1a-c128-f99966759ce8:2014-08-22T13:36:25.263Z",
  "_rev": "3-24d7258aa284524d083ab1ff2f4bc997",
  "doc_type": "followup",
  "version": "0.0.0",
  "symptoms": {
    "headache": false,
    "temperature": 36.50,
    "other": "some other",
    "loss_of_appetite": true
  },
  "dateOfVisit": "2014-08-22T13:36:25.263Z",
  "geoInfo": {
    "timestamp": 1408715750330,
    "coords": {
      "speed": null,
      "heading": null,
      "altitudeAccuracy": null,
      "accuracy": 2052,
      "altitude": null,
      "longitude": 0.3676124,
      "latitude": 0.51913
    }

  },
  "comment": "some comment",
  "interviewer": {
    "name": "test interviewer"
  },
  "deviceId": "e1234",
  "status": "complete",
  "personId": "7cdbd7e2-523a-4c1a-c128-f99966759ce8"
}

```


## Image
### 1.json
```json
{
  "doc_type": "image",
  "title": "Test Image",
  "mimeType": "image/jpeg",
  "data": "/9j/4AAQSkZJRgABAQEASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAABGqADAAQAAAABAAABGgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgBGgEaAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAgEBAgMCAgIDBAMDAwMEBQQEBAQEBQYFBQUFBQUGBgYGBgYGBgcHBwcHBwgICAgICQkJCQkJCQkJCf/bAEMBAQEBAgICBAICBAkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCf/dAAQAEv/aAAwDAQACEQMRAD8A++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//R++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//S++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//T++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//U++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//V++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//W++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//X++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//R++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//S++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//T++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//U++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//V++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//W++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//X++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q++KKKK/ynP8Ah3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z"
}


```


### 2.json
```json
{
  "doc_type": "image",
  "title": "Test Image"
}

```


## NutritionSurvey
### 1.json
```json
{
  "doc_type": "nutritionSurvey",
  "uuid": "d7a6fab3-7c41-4257-afac-4583b391cfe2",
  "deviceID": "01:23:45:67:89:ab",
  "syncDate": "2015-02-02T10:18:40.829Z",
  "startTime": "2015-02-02T10:14:01.056Z",
  "created": "2015-02-02T10:18:07.903Z",
  "_rev": "5-ca06629e1b7879f9642ee4791cc623ae",
  "modified": "2015-02-02T12:14:08.916Z",
  "householdID": 11,
  "cluster": 22,
  "endTime": "2015-02-02T10:18:40.270Z",
  "location": [
    1.2222222,
    3.4444444
  ],
  "members": [
    {
      "leftDuringRecall": "Y",
      "firstName": "Joyce",
      "surveyType": "",
      "gender": "M",
      "age": 1,
      "joinedDuringRecall": "N",
      "survey": {},
      "diedDuringRecall": "N",
      "bornDuringRecall": "N"
    },
    {
      "leftDuringRecall": "Y",
      "firstName": "Godel",
      "surveyType": "",
      "gender": "M",
      "age": 97,
      "joinedDuringRecall": "N",
      "survey": {},
      "diedDuringRecall": "N",
      "bornDuringRecall": "N"
    },
    {
      "leftDuringRecall": "Y",
      "firstName": "Flippen",
      "surveyType": "women",
      "gender": "F",
      "age": 34,
      "joinedDuringRecall": "N",
      "skipped": false,
      "survey": {},
      "diedDuringRecall": "N",
      "bornDuringRecall": "N"
    }
  ],
  "teamLeader": {
    "firstName": "Alexei",
    "mobile": "000000000000",
    "lastName": "Vronsky",
    "birthYear": 2010,
    "memberID": 1,
    "gender": "M",
    "email": "alexei@example.com",
    "_id": "2bc34546-3d5c-41a8-eefd-eb9b4819c56b",
    "_rev": "1-38fe619147fc30ece77cf3ae04b3de71"
  },
  "teamAnthropometrist": {
    "firstName": "Stepan",
    "mobile": "000000000000",
    "lastName": "Oblonsky",
    "birthYear": 1989,
    "memberID": 2,
    "gender": "M",
    "email": "stepan@example.com",
    "_id": "2bc34546-3d5c-41a8-eefd-eb9b4819c590",
    "_rev": "1-38fe619147fc30ece77cf3ae04b3de28"
  },
  "teamAssistant": {
    "firstName": "Darya",
    "mobile": "000000000000",
    "lastName": "Oblonskaya",
    "birthYear": 1970,
    "memberID": 3,
    "gender": "F",
    "email": "darya@example.com",
    "_id": "2bc34546-3d5c-41a8-eefd-eb9b4819c199",
    "_rev": "1-38fe619147fc30ece77cf3ae04b3de57"
  },
  "_id": "d7a6fab3-7c41-4257-afac-4583b391cfe2",
  "tools": {
    "uuid": "131bfef0-a5b2-4f6a-f717-d9e2572b65d9",
    "created": "2015-02-02T10:05:26.745Z",
    "modified": "2015-02-02T10:05:26.745Z",
    "_id": "131bfef0-a5b2-4f6a-f717-d9e2572b65d9",
    "_rev": "1-39cf84d5c729b84d3fd8e1bbc6bff78b",
    "childMUAC": {
      "toolID": 530,
      "measurement": 76
    },
    "scale": {
      "toolID": 100,
      "measurement": 44
    },
    "heightBoard": {
      "toolID": 2,
      "measurement": 90
    },
    "adultMUAC": {
      "toolID": 1,
      "measurement": 666
    }
  },
  "history": [
    {
      "modified": "2015-02-02T10:18:40.829Z",
      "members": {
        "0": {
          "age": 34
        }
      }
    }
  ]
}

```


### 2.json
```json
{
  "doc_type": "nutritionSurvey",
  "teamLeader": {
    "firstName": "Alexei",
    "mobile": "000000000000",
    "lastName": "Vronsky",
    "birthYear": 1970,
    "memberID": 1,
    "gender": "M",
    "email": "alexei@example.com",
    "_id": "2bc34546-3d5c-41a8-eefd-eb9b4819c56b",
    "_rev": "1-38fe619147fc30ece77cf3ae04b3de71"
  },
  "teamAnthropometrist": {
    "firstName": "Stepan",
    "mobile": "000000000000",
    "lastName": "Oblonsky",
    "birthYear": 1959,
    "memberID": 2,
    "gender": "M",
    "email": "stepan@example.com",
    "_id": "2bc34546-3d5c-41a8-eefd-eb9b4819c590",
    "_rev": "1-38fe619147fc30ece77cf3ae04b3de28"
  },
  "teamAssistant": {
    "firstName": "Darya",
    "mobile": "000000000000",
    "lastName": "Oblonskaya",
    "birthYear": 1989,
    "memberID": 3,
    "gender": "F",
    "email": "darya@example.com",
    "_id": "2bc34546-3d5c-41a8-eefd-eb9b4819c199",
    "_rev": "1-38fe619147fc30ece77cf3ae04b3de57"
  }
}

```


## PackingList
### 1.json
```json
{
  "doc_type": "packingList",
  "version": "1.0.0",
  "productID": "BCG",
  "expectedQty": 10,
  "packedQty": 11,
  "deliveredQty": 9,
  "adjustmentReason": "Broken box"
}

```


## Person
### 1.json
```json
{
  "_id": "xxx",
  "_rev": "3-24d7258aa284524d083ab1ff2f4bc997",
  "doc_type": "person",
  "version": "0.0.0",
  "surname": "XXX",
  "otherNames": "XXX",
  "gender": "m",
  "age": { "years": 41, "months": 0 },
  "occupation": "Butcher",
  "phone": "12341234",
  "phoneOwner": "someone",
  "createdDate": "2014-08-18T00:00:00Z",
  "address": {
    "adminDivision1": "Caldwell",
    "adminDivision2": "Liberia",
    "adminDivision3": "MONTSERRADO",
    "adminDivision4": "1600 - Paynseville Duport Road",
    "countryCode": "gn"
  },

  "changeLog": [
    {
      "rev": "21-f0025f84fccdc733532ed53892e2a2bd",
      "timestamp": 1413456402925,
      "user": "user_name"
    }
  ],

  "contact": {
    "type": "Slept in same house",
    "status": "active",
    "sourceCases": [{
      "personId": "XXX-123-1",
      "lastContactDate": "2014-08-08T00:00:00Z"
    }],

    "followUps": [{
      "symptoms": {
        "headache": false,
        "temperature": 36.50,
        "other": "some other",
        "loss_of_appetite": true
      },

      "dateOfVisit": "2014-08-22T13:36:25.263Z",

      "geoInfo": {
        "timestamp": 1408715750330,
        "coords": {
          "speed": null,
          "heading": null,
          "altitudeAccuracy": null,
          "accuracy": 2052,
          "altitude": null,
          "longitude": 0.3676124,
          "latitude": 0.51913
        }

      },
      "comment": "some comment",
      "interviewer": {
        "name": "test interviewer"
      },
      "deviceId": "e1234"
    }]
  },

  "case": {
    "id": "case id",
    "status": "probable",
    "onsetDate": "2014-04-04T00:00:00+00:00",
    "symptoms": {
      "headache": false,
      "temperature": 36.50,
      "nausea_vomiting": true,
      "thoracic_pain": true
    },
    "geoInfo": {
      "timestamp": 1408715750330,
      "coords": {
        "speed": null,
        "heading": null,
        "altitudeAccuracy": null,
        "accuracy": 2052,
        "altitude": null,
        "longitude": 0.3676124,
        "latitude": 0.51913
      }
    },

    "interviewer": {
      "name": "Francesco",
      "phone": "1234"
    }
  },

  "labResults": [{
  }],

  "source": {
    "formhub": {
      "crf": {
        "residence": {
          "counties": "MONTSERRADO",
          "community": "Other",
          "country": "Liberia",
          "community_other": "Caldwell",
          "zones": "1600 - Paynseville Duport Road"
      },
      "class": {
        "crf_sourcedate1": "2014-08-13",
        "crf_classification": "Contact - Complete",
        "crf_casedate": "2014-05-26",
        "crf_caseid": "XXX-1234",
        "crf_onset": "2014-05-26",
        "crf_confirmdate": "2014-05-26",
        "crf_evidence": "...",
        "s1": {
          "source1": "",
          "sourceid1": "76",
          "name1": ""
        }
      },
      "crf_surname": "XXX",
      "crf_enterdate": "2014-08-18",
      "crf_ageunits": "Years",
      "crf_name": "XXX"
    },
    "fh_internal": {
      "bamboo_dataset_id": "",
      "tags": [],
      "xform_id_string": "MCCCF",
      "geolocation": [
        null,
        null
        ],
        "status": "submitted_via_web",
        "uuid": "import-xxx-yyy",
        "attachments": [
          ],
          "submission_time": "2014-09-26T15:30:41",
          "id": 1234
        },
        "meta": {
          "instanceID": "uuid:import-1234-1234",
          "deprecatedID": "uuid:import-1234-1234"
        },
        "begin": {
          "etu": "No",
          "case": "No",
          "lab": "No",
          "contact": "Yes",
          "burial": "No"
        },
        "formhub": {
          "uuid": "1234xxx"
        },
        "formhub_couchdb_sync_version": 1
      },
      "vhf": {
      }
    }
  }

```


### 2.json
```json
{
  "doc_type": "person",
  "version": "0.0.0",
  "surname": "XXX",
  "otherNames": "YYY",
  "gender": "m",
  "classification": {
    "name": "case",
    "subClassification": "confirmed"
  },
  "address": {
    "adminDivision1": "Conakry",
    "adminDivision2": "",
    "countryCode": "gn"
  },
  "changeLog": [],
  "status": "alive",
  "age": { "years": 99, "months": 0 },
  "phoneNumber": "0123456",
  "region": "Conakry",
  "modifiedDate": "2014-09-20T15:25:50+00:00",
  "createdDate": "2014-04-04T01:05:02+00:00",
  "_id": "vhf.a9634dbe-7600-4ddd-a3ef-da438ba24b93",
  "case": {
    "status": "confirmed",
    "id": "GUI-CKY-14-0198",
    "onsetDate": "2014-04-04T01:05:02+00:00",
    "interviewer": {
      "name": "",
      "phone": "",
      "mail": "",
      "position": "",
      "district": "",
      "healthFacility": ""
    },
    "symptoms": {
      "temperature": 36,
      "abdominal_pains": true,
      "articular_pain": true,
      "cough": true,
      "diarrhea": true,
      "difficulty_breathing": true,
      "difficulty_swallowing": true,
      "headache": true,
      "hiccups": true,
      "intense_fatigue": true,
      "loss_of_appetite": true,
      "muscular_pain": true,
      "nausea_vomiting": true,
      "sore_throat": true,
      "thoracic_pain": true,
      "unexplained_bleedings": true,
      "rash": true,
      "other": "some other"
    }
  },
  "contact": {
    "status": "active",
    "sourceCases": [
      {
        "relationship": "",
        "personId": "XXX-123-a",
        "lastContactDate": "2014-04-14T00:00:00+00:00"
      },
      {
        "relationship": "",
        "personId": "XXX-123-b",
        "lastContactDate": "2014-04-01T00:00:00+00:00"
      },
      {
        "relationship": "frère",
        "personId": "XXX-123-c",
        "lastContactDate": "2014-04-01T00:00:00+00:00"
      }
    ],
    "followUps": [
      {
        "dateOfVisit": "2014-04-04T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      },
      {
        "dateOfVisit": "2014-04-06T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      },
      {
        "dateOfVisit": "2014-04-07T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      },
      {
        "dateOfVisit": "2014-04-08T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      },
      {
        "dateOfVisit": "2014-04-10T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      },
      {
        "dateOfVisit": "2014-04-11T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      },
      {
        "dateOfVisit": "2014-04-12T00:00:00.000Z",
        "isIsolated": true,
        "isSymptomatic": true
      },
      {
        "dateOfVisit": "2014-04-13T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      }
    ]
  }
}

```


### 3.json
```json
{
  "_id": "xxx-xxx-xxx-xxx",
  "_rev": "3-56a67842cda6735221574de444827e20",
  "doc_type": "person",
  "version": "0.0.0",

  "referenceNumber": 542113,

  "status": "dead",
  "surname": "Sims",
  "otherNames": "Julian",
  "createdDate": "2014-04-04T01:05:02+00:00",
  "age": { "years": 54, "months": 0 },
  "gender": "m",
  "classification": {
    "name": "case",
    "subClassification": "confirmed"
  },
  "phoneNumber": "trtyrty",
  "familyPhoneNumber": "765765765",

  "address": {
    "adminDivision1": 1,
    "adminDivision2": 4
  },

  "case": {
    "status": "probable",
    "onsetDate": "2014-04-04T01:05:02+00:00",
    "epiId": "alksjdalskdj",

    "hadContactWith": {
      "deadPerson": false,
      "sickPerson": false,
      "healthWorker": true,
      "homeQuaratine": false
    },

    "symptoms": {
      "other": "",
      "diarrhea": false,
      "rash": false,
      "difficulty_swallowing": false,
      "headache": false
    }
  },

  "calls": [
    {
      "createdBy": "Test",
      "createdOn": "2014-10-25T14:30:35.720Z",

      "name": "xxx",
      "address": {
        "adminDivision1": 1,
        "adminDivision2": 5,
        "countryCode": "lr"
      },
      "phoneNumber": "1234567",
      "otherPhoneNumber": "12345678",
      "callNature": "death",
      "callDetails": "gfghfgfhghjg",
      "isFollowUp": true
    }
  ],

  "comments": [
    {
      "date": "2014-10-01T00:00:00Z",
      "text": "bla bla bla"
    }
  ],

  "actions": [
    {
      "doc_type": "response",
      "caseStatus": "open"
    }
  ]
}

```


### 5.json
```json
{
  "doc_type": "person",
  "version": "0.0.0",
  "surname": "XXX",
  "classification": {
    "name": "case",
    "subClassification": "confirmed"
  },
  "address": {
    "adminDivision1": "Freetown",
    "adminDivision2": "",
    "countryCode": "sl"
  },
  "leader": {
    "name": "Leader Leader",
    "phone": "+12344567"
  },
  "changeLog": [],
  "status": "alive",
  "age": { "years": 99, "months": 0, "category": "adult" },
  "phoneNumber": "0123456",
  "region": "Conakry",
  "modifiedDate": "2014-09-20T15:25:50+00:00",
  "createdDate": "2014-04-04T01:05:02+00:00",
  "_id": "vhf.xxx-yyy-zzz",
  "case": {
    "status": "confirmed",
    "id": "xxx-yyy-12-1234",
    "onsetDate": "2014-04-04T01:05:02+00:00",
    "interviewer": {
      "name": "",
      "phone": "",
      "mail": "",
      "position": "",
      "district": "",
      "healthFacility": ""
    },
    "symptoms": {
      "temperature": 36,
      "abdominal_pains": true,
      "articular_pain": true,
      "cough": true,
      "diarrhea": true,
      "difficulty_breathing": true,
      "difficulty_swallowing": true,
      "headache": true,
      "hiccups": true,
      "intense_fatigue": true,
      "loss_of_appetite": true,
      "muscular_pain": true,
      "nausea_vomiting": true,
      "sore_throat": true,
      "thoracic_pain": true,
      "unexplained_bleedings": true,
      "rash": true,
      "other": "some other"
    }
  },
  "contact": {
    "status": "active",
    "sourceCases": [
      {
        "relationship": "",
        "personId": "XXX-123-a",
        "lastContactDate": "2014-04-14T00:00:00+00:00",
        "exposures": ["slept-ate", "physical-contact"]
      },
      {
        "relationship": "",
        "personId": "XXX-123-b",
        "lastContactDate": "2014-04-01T00:00:00+00:00",
        "exposures": ["physical-contact"]
      },
      {
        "relationship": "frère",
        "personId": "XXX-123-b",
        "lastContactDate": "2014-04-01T00:00:00+00:00",
        "exposures": ["touch-fluids"],
        "relative": { "name": "placeholder name", "phone": "+123 123 123" }
      }
    ],
    "followUps": [
      {
        "dateOfVisit": "2014-04-04T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false,
        "status": "incomplete",
        "incompleteReason": "gone-to-work",
        "comment": "Gone to work / sell"
      },
      {
        "dateOfVisit": "2014-04-06T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      },
      {
        "dateOfVisit": "2014-04-07T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      },
      {
        "dateOfVisit": "2014-04-08T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      },
      {
        "dateOfVisit": "2014-04-10T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      },
      {
        "dateOfVisit": "2014-04-11T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      },
      {
        "dateOfVisit": "2014-04-12T00:00:00.000Z",
        "isIsolated": true,
        "isSymptomatic": true
      },
      {
        "dateOfVisit": "2014-04-13T00:00:00.000Z",
        "isIsolated": false,
        "isSymptomatic": false
      }
    ]
  }
}

```


### 6.json
```json
{
  "_id": "fdbe63ec2cf62e484922c6f4203b5695",
  "doc_type": "person",
  "version": "1.16.0",
  "createdDate": "2015-03-11T10:45:14.715Z",
  "surname": "Doe",
  "otherNames": "John aka J.",
  "phoneNumber": "(01123) 2345678",
  "relative": {
    "name": "",
    "phone": "0112 334455"
  },
  "case": {
    "id": "qz0255",
    "status": "unknown"
  },
  "sources": [
    {
      "type": "migration",
      "name": "extract-source-cases-migration",
      "origin": "00ae40fe-7b6f-4cea-df66-e00b59713944/contact/source-cases/0",
      "timestamp": 1422613414251
    }
  ]
}

```


## PickedProduct
### 1.json
```json
{
  "doc_type": "pickedProduct",
  "version": "1.0.0",
  "_id": "54b1c77f60b10a358beeb8d305001cd2",
  "expectedQty": 10,
  "actualQty": 9,
  "productType": "BCG"
}

```


## Product
### 1.json
```json
{
  "doc_type": "product",
  "version": "1.0.1",
  "active": true,
  "baseUOM": "e5def927-b173-44b6-9112-3103a473a65c",
  "code": "HPV",
  "description": "HPV prevents infections such cervical cancer, genital warts, and some less common cancers",
  "name": "Human Papilloma Virus Vaccine",
  "storage": "refrigerator"
}

```


## VaccineTrialParticipant
### 1.json
```json
{
   "_id": "CNH-11234",
   "cdcId": "CNH-11234",
   "firstName": "Jeff",
   "lastName": "Testson",
   "paymentPhoneNumber": "6668882222",
   "enrollmentDate": "2015-02-26T16:49:49.508Z",
   "enrollmentSite": "CNH",
   "doc_type": "vaccineTrialParticipant",
   "modifiedDate": "2015-02-26T16:50:57.517Z",
   "photograph": {
       "encoding": "base64",
       "encodingType": "jpeg",
       "mimeType": "image/jpeg",
       "data": "photo.jpg"
   }
}

```


### 2.json
```json
{
   "doc_type": "vaccineTrialParticipant",

   "_id": "KBU-12344",
   "cdcId": "KBU-12344",

   "enrollmentSite": "KBU",
   "enrollmentDate": "2015-02-26T16:49:49.508Z",

   "title": "Ms.",
   "firstName": "Test",
   "lastName": "Appson",
   "gender": "f",

   "occupationalDetails": "gg",

   "birthDay": 7,
   "birthMonth": 9,
   "birthYear": 1988,
   "age": {
       "years": 26,
       "months": 5
   },

   "vaccinationDate": "2015-02-27T16:50:57.517Z",
   "vaccinationSite": "KBU",

   "phoneNumber": "6668882222",
   "bestContactTime": "morning",
   "paymentPhoneNumber": "6668882223",
   "studyPhoneNumber": "7668882223",

   "modifiedDate": "2015-02-26T16:50:57.517Z",

   "photograph": {
       "mimeType": "image/jpeg",
       "encoding": "base64",
       "encodingType": "jpeg",
       "data": ""
   },

   "address": {
       "address": "my road",
       "city": "test city",
       "householdHeadFirstName": "whatever",
       "householdHeadSurname": "whatever",
       "landmark": "behind the store",
       "adminDivision1": { "id": "W", "name": "West" },
       "adminDivision2": { "id": "32", "name": "Old house" },
       "adminDivision3": { "id": "32-03", "name": "Other old house" }
   },

   "alternateContact1": {
     "name": "fname",
     "relationship": "sister",
     "address": "same house",
     "phone": "1199922299",
     "messageConfirmation": true
   },

   "alternateContact2": {
     "name": "other contact",
     "relationship": "brother",
     "address": "same house",
     "phone": "2199922299",
     "messageConfirmation": false
   },


   "biometrics": [
       {
           "type": "fingerprint",
           "ntemplate": "",
           "iso": "",
           "meta": {
               "finger": "4",
               "hand": "left"
           }
       }
   ]
}


```


