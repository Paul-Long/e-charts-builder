'use strict';
const clone = require('lodash/defaultsDeep');

exports = module.exports = function(grid) {
  return clone(grid, {
      borderColor: '#193D37',
      show: true
    }
  );
};
