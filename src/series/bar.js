'use strict';

const clone = require('lodash/defaultsDeep');

exports = module.exports = function (bar) {
  return clone(bar, {
    type: 'bar',
    barMaxWith: 25,
    label: {
      color: '#FFEBC8'
    }
  });
}
