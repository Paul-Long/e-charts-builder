'use strict';
const clone = require('lodash/defaultsDeep');

exports = module.exports = function(opt) {
  return clone(opt, {
      maskColor: 'rgba(255, 255, 255, 0)',
      color: '#136c5e',
      lineWidth: 4,
      spinnerRadius: 20
    }
  );
};
