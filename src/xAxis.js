'use strict';
const clone = require('lodash/defaultsDeep');

exports = module.exports = function(xAxis) {
  return clone(
    {
      type: 'category',
      offset: 1,
      axisLabel: {
        show: true,
        fontSize: 10,
        color: '#8F9598',
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
          color: '#193D37',
          width: 1,
          type: 'solid'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#121A19', '#172422']
        }
      }
    },
    xAxis
  );
};
