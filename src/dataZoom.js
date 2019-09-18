'use strict';

const clone = require('lodash/defaultsDeep');
const handleIcon =
  'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFENDE0RkRGQTZCMDExRTlCMkM5RTNGNTJEQ0MzNEFDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFENDE0RkUwQTZCMDExRTlCMkM5RTNGNTJEQ0MzNEFDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUQ0MTRGRERBNkIwMTFFOUIyQzlFM0Y1MkRDQzM0QUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUQ0MTRGREVBNkIwMTFFOUIyQzlFM0Y1MkRDQzM0QUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz48DKcTAAAAZElEQVR42mL8//8/Ay0AEwONwKjBcMAompfg9e//v5kM/xlkqGMiwxMmRqZ0FqoaCgJAs/4x/JvJRIyhb+qzsLLxGT6aKhBxKJwb95iqkQdLGaCkAWJQ1VCgmYyjhdDQNRggwAAVGSHsZoYG5gAAAABJRU5ErkJggg==';

exports = module.exports = function(dataZoom) {
  dataZoom = dataZoom || [];
  return dataZoom.map((dz) => {
    if (dz.type === 'slider') {
      return clone(dz, {
        type: 'slider',
        show: true,
        showDetail: false,
        backgroundColor: '#121A19',
        height: 8,
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
          color: '#ffffff'
        },
        handleIcon,
        handleSize: '200%'
      });
    } else {
      return clone(dz, {type: 'inside'});
    }
  });
};
