`duplicateIDs`: i am documenting this field as i found it in [this
function](https://github.com/eHealthAfrica/sl-ebola-call-admin/blob/b7e743b4114d0c12aa98f945029ee6dba8cc8671/app/scripts/services/duplicate-calls.js#L31-L50)
whose purpose is to set or unset the duplicated status of a group of
calls. As far as i can understand, if A, B and C are three duplicate
calls and aid, bid, cid are their ids, the content of `duplicateIDs`
for the three calls will be:

A: [bid, cid]
B: [aid, cid]
C: [aid, bid]

Note that, although all duplicates seem to have the same value, in the
call centre there is a notion of "primary call", that is the first
call of a set of duplicates, in chronological order. For example there
is a functionality in the call centre for closing all duplicates in a
set, leaving only the primary call open. Search for `primaryCall` in
the call centre code base for more info

#### Assumptions

For a discussion about some assumptions in duplicate handling, have a look at [eHealthAfrica/sl-ebola-call-admin#1180](https://github.com/eHealthAfrica/sl-ebola-call-admin/issues/1180)
