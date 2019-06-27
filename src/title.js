'use strict';

const clone = require('lodash/defaultsDeep');

exports = module.exports = function(title) {
  return clone(title, {
      textStyle: {
        color: '#FFEBC8',
        fontSize: 12
      }
    }
  );
};
