'use strict';

const clone = require('lodash/defaultsDeep');

exports = module.exports = function(dataZoom) {
  dataZoom = dataZoom || [];
  return dataZoom.map((dz) => {
    if (dz.type === 'slider') {
      return clone( dz, {
          type: 'slider',
          show: true,
          showDetail: false,
          backgroundColor: '#121A19',
          height: 20,
          dataBackground: {
            lineStyle: {
              color: '#193d37',
              width: 1,
              opacity: 1
            },
            areaStyle: {
              color: 'rgba(255,147,0,0.20)'
            }
          },
          fillerColor: 'rgba(255,147,0,0.20)',
          borderColor: '#172422',
          handleStyle: {
            color: '#193D37'
          }
        }
      );
    } else {
      return clone(dz, {type: 'inside'});
    }
  });
};
