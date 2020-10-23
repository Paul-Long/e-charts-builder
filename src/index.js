'use strict';
const echarts = require('echarts');
const dataZoom = require('./dataZoom');
const grid = require('./grid');
const legend = require('./legend');
const series = require('./series');
const tooltip = require('./tooltip');
const title = require('./title');
const xAxis = require('./xAxis');
const yAxis = require('./yAxis');
const axisPointer = require('./axisPointer');
const loading = require('./loading');

function Builder({container}) {
  this.container = container;
  this.charts = null;
  this.option = {
    animationDuration: 100,
    grid: grid(),
    series: []
  };
}
Builder.prototype.title = function(t) {
  if (typeof t === 'string' || typeof t === 'number') {
    t = {text: t};
  }
  this.option.title = title(t);
  return this;
};
Builder.prototype.color = function(colors) {
  if (!colors instanceof Array) {
    console.error('colors is array');
  }
  this.option.color = colors;
  return this;
};
Builder.prototype.dataZoom = function(dz) {
  this.option.dataZoom = dataZoom(dz);
  return this;
};
Builder.prototype.grid = function(gr) {
  if (gr instanceof Array) {
    this.option.grid = gr.map((g) => grid(g));
  } else {
    this.option.grid = grid(gr);
  }
  return this;
};
Builder.prototype.legend = function(le) {
  this.option.legend = legend(le);
  return this;
};
Builder.prototype.axisPointer = function(ap) {
  this.option.axisPointer = axisPointer(ap);
  return this;
};
Builder.prototype.series = function(se) {
  if (se instanceof Array) {
    this.option.series = se.map((s) => {
      if (series[s.type]) {
        return series[s.type](s);
      }
      return s;
    });
  } else {
    if (series[se.type]) {
      this.option.series = [series[se.type](se)];
    } else {
      this.option.series = [se];
    }
  }
  return this;
};
Builder.prototype.tooltip = function(tt) {
  this.option.tooltip = tooltip(tt);
  return this;
};
Builder.prototype.xAxis = function(xa) {
  if (xa instanceof Array) {
    this.option.xAxis = xa.map((x) => xAxis(x));
  } else {
    this.option.xAxis = xAxis(xa);
  }
  return this;
};
Builder.prototype.yAxis = function(ya) {
  if (ya instanceof Array) {
    this.option.yAxis = ya.map((y) => yAxis(y));
  } else {
    this.option.yAxis = yAxis(ya);
  }
  return this;
};
Builder.prototype.resize = function() {
  if (this.charts) {
    this.charts.resize();
  }
};
Builder.prototype.dispose = function() {
  if (this.container && this.charts) {
    echarts.dispose(this.container);
  }
};
Builder.prototype.animation = function(animation) {
  animation = animation || {};
  for (let key in animation) {
    if (Object.prototype.hasOwnProperty.call(animation, key)) {
      this.option[key] = animation[key];
    }
  }
  return this;
};
Builder.prototype.setOption = function(option) {
  option = option || {};
  for (let key in option) {
    if (Object.prototype.hasOwnProperty.call(option, key)) {
      this.option[key] = option[key];
    }
  }
  return this;
};
Builder.prototype.instance = function() {
  return this.charts;
};
Builder.prototype.render = function(options, merge = true) {
  if (!this.charts) {
    this.charts = echarts.init(this.container);
  }
  options = options || this.option;
  this.charts.setOption(options, merge);
  return this;
};
Builder.prototype.dispatchAction = function() {
  if (this.charts) {
    this.charts.dispatchAction(...arguments);
  }
};
Builder.prototype.on = function() {
  if (this.charts) {
    this.charts.on(...arguments);
  }
};
Builder.prototype.showLoading = function(opt) {
  if (this.charts) {
    this.charts.showLoading('default', loading(opt || {}));
  }
};
Builder.prototype.hideLoading = function() {
  if (this.charts) {
    this.charts.hideLoading();
  }
};
exports.Builder = Builder;
module.exports = Builder;
