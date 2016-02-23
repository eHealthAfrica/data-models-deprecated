#### Motivation and context

A lock object is a sub-document used to implement concurrency in
Angular apps, i created it while implementing a solution for [this
call centre
issue](https://github.com/eHealthAfrica/sl-ebola-call-admin/issues/1258). Here
is a [discussion related to the design of this
feature](https://github.com/eHealthAfrica/sl-ebola-call-admin/issues/1198).

I tried to implement this in a general way, in order to be reused in
the call centre and in other applications using Couch as their
backend, since handling concurrency is a common problem.

A lock object represents a lock on a Couch document or part of
it. When a single Couch instance is used by two users to modify the
same document, the user who saves last gets an error from Couch,
because his/her copy of the document is outdated. We want to be able
to notify the users before they try to save, while they are still
working on it, so that work does not get done twice and people do not
step on each other's feet. Use cases involve:

- Dispatchers working on a list of calls coming from operators
- Operators calling back persons in order to follow up on received calls

#### Related user interface

We want a data model enabling the following interactions:

- Locked resources can be hidden from a list, or marked
- Users opening a locked resource will receive a message saying "User
  <name> already started working on this at <date>"
- Users keeping a resource locked for too much time may receive a
  message saying "You kept this open for too long, now user
  <name> started working on this, please wait for them to finish"

#### Implementation and meaning of properties

Properties are designed to allow locking a document or part of it, and
take it away from its current owner if they take too long:

- `currently`: `true` if currently locked, `false` otherwise
- `date`: when this lock was acquired the last time, in Universal Time (UTC)
- `owner`: the last user acquiring this lock. This is a text meant to
  be shown via the user interface, in order to allow to identify the
  person locking a resource as easily as possible

#### Conventional meaning

Currently such lock object can be placed at the root at documents,
meaning that the locked status of the whole document is reflected by
it.

If needed, in the future a lock object could be put on a part of the
object, indicating the locked status of the parent object and all its
siblings. For example, consider the following object:

```
{
 a: { b: 1, c: 2},
 d: {
  locked: {
   currently: true,
   date: "2016-01-25T17:28",
   owner: "Francesco Occhipinti"
  },
  e: { f: 1, g: 2},
  h: 3
 }
}
```

Given that object, consider locked the properties `e`, `f`, `g`, `h`,
and free the properties `a`, `b`, `c`.

#### Owner id and name

There are two fields related to the owner. The first, `owner` is for
machine use and should hold the user id, which means the `name` from
the Couch user document, check [the
doc](http://docs.couchdb.org/en/1.6.1/intro/security.html#users-documents). The
second, `ownerToShow`, is supposed to be shown in interaction with
the users, for example when saying that `This document is already used
by <ownerToShow>`. Thus `ownerToShow` should contain the
clearest string identifying an user, her full name or something
similar.