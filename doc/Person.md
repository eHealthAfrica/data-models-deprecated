##### Town Chief / Village Leader (see ticket 1024)

`leader`

They are important in the Ebola response, at least in Liberia

##### Relative (see ticket 1025)

`relative`

We wanted to standardize on persons connected to the source case (Interviewer, Leader, Relative)
So relative has this currently unused 'name' property. We might take it in use later,
[see discussion here](https://github.com/eHealthAfrica/data_model/pull/64#issuecomment-70822424)

##### Exposure type (see ticket 1020)

`contact.sourceCases[x].exposures`

- `slept-ate`: Slept or ate in same household as the case
- `physical-contact`: Direct physical contact with body of case
- `touch-fluids`: Touch body fluids (saliva, urine, feces)
- `objects`: Manipulation of clothes or other objects
- `breastfeeding`: Breastfeeding of child
- `funeral`: Funeral attendance
- `other`: Other
