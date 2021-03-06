'use strict';

const { blue, green } = require('chalk');
const mappings = require('../mappings');

function unique(v, i, a) {
  return a.indexOf(v) === i;
}

function print(value) {
  console.log(value);
}

function indent(value) {
  let level = value.split('/').length - 1;
  let color = level > 0 ? blue : green;
  return '  '.repeat(level) + color(value);
}

mappings
  .map(mapping => mapping.module)
  .filter(unique)
  .map(key => indent(key))
  .forEach(print);
