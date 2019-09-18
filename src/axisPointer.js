'use strict';

const clone = require('lodash/defaultsDeep');

exports = module.exports = function(axisPointer) {
  return clone(axisPointer, {
    link: {xAxisIndex: 'all'},
    lineStyle: {
      width: 1,
      color: '#FF9300',
      type: 'dashed',
      opacity: 1
    },
    label: {
      color: '#FFEBC8',
      fontSize: 10,
      padding: [3, 5, 3, 5],
      backgroundColor: '#193d37',
      shadowBlur: 1,
      shadowColor: '#8F9598'
    }
  });
};
