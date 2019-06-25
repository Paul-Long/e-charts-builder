'use strict';

const clone = require('lodash/defaultsDeep');

exports = module.exports = function(line) {
  return clone(
    {
      type: 'line',
      itemStyle: {
        width: 1
      },
      lineStyle: {
        width: 1
      }
    },
    line
  );
};
