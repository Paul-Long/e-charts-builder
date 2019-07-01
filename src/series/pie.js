'use strict';

const clone = require('lodash/defaultsDeep');

exports = module.exports = function (pie) {
  return clone(pie, {
    type: 'pie'
  });
};
