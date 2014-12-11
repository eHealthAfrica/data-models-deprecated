#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var dataModel = require('./');

var optionator = require('optionator')({
  prepend: 'Usage: ' + pkg.name + ' [options]',
  append: 'Version ' + pkg.version,
  options: [
    {
      option: 'help',
      alias: 'h',
      type: 'Boolean',
      description: 'displays help (append [option] for expansion)',
      example: pkg.name + ' --help model'
    },
    {
      option: 'model',
      alias: 'm',
      type: 'String',
      description: 'the model name to generate',
      example: pkg.name + ' --model driver'
    },
    {
      option: 'count',
      alias: 'c',
      type: 'Int',
      description: 'number of models to generate',
      example: pkg.name + ' --count 2'
    }
  ]
});

function cli() {
  var opts = [];
  try {
    opts = optionator.parse(process.argv);
  } catch(err) {
    return err;
  }

  if (opts.help) {
    if (opts._.length) {
      return optionator.generateHelpForOption(opts._[0]);
    }
    return optionator.generateHelp();
  }

  var factory = dataModel.generate(opts.model, opts.count);
  return JSON.stringify(factory, null, 2);
}

var stdout = cli();
console.log(stdout);
