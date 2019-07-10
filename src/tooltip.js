'use strict';
const clone = require('lodash/defaultsDeep');

exports = module.exports = function(tooltip) {
  return clone(tooltip, {
      show: true,
      trigger: 'axis',
      backgroundColor: '#193D37',
      padding: [4, 10],
      textStyle: {
        color: '#FFEBC8'
      },
      extraCssText: 'box-shadow:0 0 4px 0 rgba(0,0,0,0.50);border-radius: 2px;border: 1px solid #308376;'
    }
  );
};
