'use strict';
const clone = require('lodash/defaultsDeep');

exports = module.exports = function(grid) {
  return clone(
    {
      borderColor: '#193D37',
      show: true
    },
    grid
  );
};
