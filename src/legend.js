'use strict';

const clone = require('lodash/defaultsDeep');

exports = module.exports = function (legend) {
  return clone({
    textStyle: {
      color: '#FFEBC8',
      fontSize: 12
    }
  }, legend);
};