'use strict';

const clone = require('lodash/defaultsDeep');

exports = module.exports = function (candlestick) {
  return clone(candlestick, {
    type: 'candlestick',
    maxBarWidth: 14,
    itemStyle: {
      color: '#DF201F',
      color0: '#21DF1F',
      borderColor: '#DF201F',
      borderColor0: '#21DF1F',
      borderWidth: 2
    }
  });
};
