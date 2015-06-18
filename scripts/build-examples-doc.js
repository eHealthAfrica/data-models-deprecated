#!/usr/bin/env node

var glob = require('glob')
var path = require('path')
var fs = require('fs')

var dir = path.resolve(__dirname, '../test/examples/*')

function getName(filename) {
  var name = path.basename(filename)

  return name.split('-')
    .map(function(part) {
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join('')
}

console.log('# Data Model Examples')
console.log('This is an auto generated compilation of examples from `test/examples`.')
console.log('To generate this file, run:')
console.log('```sh')
console.log('npm run build-docs')
console.log('```')

glob(dir, function(error, dirnames) {
  if (error) return console.error(error)

  dirnames.forEach(function(dirname) {
    glob(path.join(dirname, '*.json'), function(error, filenames) {
      if (error) return console.error(error)
  
      console.log('## ' + getName(dirname))

      filenames.forEach(function(filename) {
        console.log('### ' + path.basename(filename))

        console.log('```json')
        console.log(fs.readFileSync(filename, { encoding: 'utf8' }))
        console.log('```')
        console.log('\n')
      })
    })
  })
})
