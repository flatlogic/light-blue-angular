import { Component } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: '[nasdaq-sparkline-widget]',
  template: '<div jq-sparkline [data]="data" [options]="options"></div>'
})

export class NasdaqSparklineWidgetComponent {
  data: Array<number>;
  options: any;

  constructor() {
    this.data = [4, 6, 5, 7, 5];
    this.options = {
      type: 'line',
      width: '99%',
      height: '60',
      lineColor: '#4ebfbb',
      fillColor: 'transparent',
      spotRadius: 5,
      spotColor: '#4ebfbb',
      valueSpots: {'0:': '#4ebfbb'},
      highlightSpotColor: '#4ebfbb',
      highlightLineColor: '#4ebfbb',
      minSpotColor: '#4ebfbb',
      maxSpotColor: '#dd5826',
      tooltipFormat: new jQuery
        .SPFormatClass('<span style="color: white">&#9679;</span> {{prefix}}{{y}}{{suffix}}'),
      chartRangeMin: Math.min.apply(null, this.data) - 1,
    };
  }
}
