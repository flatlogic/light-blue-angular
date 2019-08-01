import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.html'
})
export class LineChartComponent implements AfterViewInit {
  @ViewChild('chartContainer', {static: true}) chartContainer: ElementRef;

  options: any = {
    xaxis: {
      tickLength: 0,
      tickDecimals: 0,
      min: 2,
      font: {
        lineHeight: 13,
        weight: 'bold',
        color: '#fff',
      },
    },
    yaxis: {
      tickDecimals: 0,
      font: {
        lineHeight: 13,
        weight: 'bold',
        color: '#fff',
      },
    },
    grid: {
      borderWidth: 0,
      margin: 0,
      minBorderMargin: 0,
      labelMargin: 20,
      hoverable: true,
      clickable: true,
      mouseActiveRadius: 6,
      color: '#ffffff'
    },
    legend: false,
    colors: ['#fff8e3', '#ffebb2', '#ffc247'],
  };

  getData() {
    return [
      [
        [1, 20],
        [2, 20],
        [3, 40],
        [4, 30],
        [5, 40],
        [6, 35],
        [7, 47],
      ], [
        [1, 13],
        [2, 8],
        [3, 17],
        [4, 10],
        [5, 17],
        [6, 15],
        [7, 16],
      ], [
        [1, 23],
        [2, 13],
        [3, 33],
        [4, 16],
        [5, 32],
        [6, 28],
        [7, 31],
      ],
    ];
  }

  createChart(data) {
    return jQuery.plotAnimator(jQuery(this.chartContainer.nativeElement), [{
      label: 'Traffic',
      data: data[2],
      lines: {
        fill: 0.3,
        lineWidth: 0,
      },
    }, {
      label: 'Traffic',
      data: data[1],
      lines: {
        fill: 0.6,
        lineWidth: 0,
      },
    }, {
      label: 'Traffic',
      data: data[0],
      animator: {steps: 60, duration: 1000, start: 0},
      lines: {lineWidth: 2},
      shadowSize: 0,
    }], this.options);
  }

  ngAfterViewInit() {
    this.createChart(this.getData());
  }
}
