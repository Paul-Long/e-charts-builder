'use strict';

const clone = require('lodash/defaultsDeep');

exports = module.exports = function(title) {
  return clone(
    {
      textStyle: {
        color: '#FFEBC8',
        fontSize: 12
      }
    },
    title
  );
};
