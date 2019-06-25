'use strict';
const clone = require('lodash/defaultsDeep');

exports = module.exports = function(tooltip) {
  return clone(
    {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: 'rgb(97,149,141)',
          width: 1,
          opacity: 0.3
        }
      },
      backgroundColor: '#193D37',
      padding: [4, 10],
      textStyle: {
        color: '#FFEBC8'
      },
      extraCssText: 'box-shadow:0 0 4px 0 rgba(0,0,0,0.50);border-radius: 2px;border: 1px solid #308376;'
    },
    tooltip
  );
};
