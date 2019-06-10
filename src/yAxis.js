'use strict';
const clone = require('lodash/defaultsDeep');

exports = module.exports = function (yAxis) {
  return clone({
    type: 'value',
    axisLabel: {
      show: true,
      color: '#8F9598',
      fontSize: 10,
      margin: 4
    },
    axisLine: {
      lineStyle: {
        color: '#193D37'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#193D37'],
        width: 1,
        type: 'solid'
      }
    },
    nameTextStyle: {
      color: '#8F9598',
      fontSize: 12
    }
  }, yAxis);
};