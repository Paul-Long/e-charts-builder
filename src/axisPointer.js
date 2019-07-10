'use strict';

const clone = require('lodash/defaultsDeep');

exports = module.exports = function(axisPointer) {
  return clone(axisPointer, {
    link: {xAxisIndex: 'all'},
    lineStyle: {
      color: 'rgb(97,149,141)',
      width: 1,
      opacity: 0.3
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
