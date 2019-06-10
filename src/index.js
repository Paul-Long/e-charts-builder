'use strict';
const dataZoom = require('./dataZoom');
const grid = require('./grid');
const legend = require('./legend');
const series = require('./series');
const tooltip = require('./tooltip');
const xAxis = require('./xAxis');
const yAxis = require('./yAxis');


function Builder({container}) {
  this.option = {
    animationDuration: 100,
    grid: grid(),
    series: []
  };
}
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
    this.option.grid = gr.map(g => grid(g));
  } else {
    this.option.grid = grid(gr);
  }
  return this;
};
Builder.prototype.legend = function(le) {
  this.option.legend = legend(le);
  return this;
};
Builder.prototype.series = function(se) {
  if (se instanceof Array) {
    this.option.series = se.map(s => series[s.type]);
  } else {
    this.option.series = [series[se.type]];
  }
};
Builder.prototype.tooltip = function(tt) {
  this.option.legend = tooltip(tt);
  return this;
};
Builder.prototype.xAxis = function(xa) {
  if (xa instanceof Array) {
    this.option.xAxis = xa.map(x => xAxis(x));
  } else {
    this.option.xAxis = xAxis(xa);
  }
  return this;
};
Builder.prototype.yAxis = function(ya) {
  if (ya instanceof Array) {
    this.option.yAxis = ya.map(y => yAxis(y));
  } else {
    this.option.yAxis = yAxis(ya);
  }
  return this;
};
Builder.prototype.render = function() {

};
exports = module.exports = Builder;


