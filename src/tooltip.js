'use strict';
const clone = require('lodash/defaultsDeep');

exports = module.exports = function (tooltip) {
  return clone({
    show: true,
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: '',
        width: 1,
        opacity: 0.3
      }
    },
    backgroundColor: '#EEDFC4',
    padding: [4, 10],
    textStyle: {
      color: '#FFEBC8'
    }
  }, tooltip)
};