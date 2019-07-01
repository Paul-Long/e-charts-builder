# e-charts-builder
echarts builder


# USED

```javascript 1.8
    this.chart = new Charts({container: this.charts})
      .title({text: 'Api', left: 20})
      .color(['#FF5B00', '#0060FF', '#00A74F'])
      .grid({left: 50, right: 20, top: 30, bottom: 40})
      .yAxis({splitNumber: 6})
      .tooltip({})
      .legend({icon: 'bar', data: ['api'], itemWidth: 12, itemHeight: 2})
      .xAxis({
        type: 'category',
        axisLabel: {formatter: (value) => value.substring(11)},
        showMaxLabel: true
      })
      .series([{type: 'line', name: 'api', data: timeLine}])
      .render();
```