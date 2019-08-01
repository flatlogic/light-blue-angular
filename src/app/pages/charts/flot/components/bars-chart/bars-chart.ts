import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'bars-chart',
  templateUrl: './bars-chart.html'
})
export class BarsChartComponent implements AfterViewInit {
  @ViewChild('chartContainer', {static: true}) chartContainer: ElementRef;

  getBarChartData() { /* eslint-disable */
    return [
      [[1388534400000, 120], [1391212800000, 70], [1393632000000, 100], [1396310400000, 60], [1398902400000, 35]],
      [[1388534400000, 90], [1391212800000, 60], [1393632000000, 30], [1396310400000, 73], [1398902400000, 30]],
      [[1388534400000, 80], [1391212800000, 40], [1393632000000, 47], [1396310400000, 22], [1398902400000, 24]],
    ];
    /* eslint-enable */
  }

  getDataSeries(data) {
    return [{
      label: 'Apple',
      data: data[0],
      bars: {
        show: true,
        barWidth: 12 * 24 * 60 * 60 * 300,
        fill: 0.5,
        lineWidth: 0,
        order: 1,
      },
    }, {
      label: 'Google',
      data: data[1],
      bars: {
        show: true,
        barWidth: 12 * 24 * 60 * 60 * 300,
        fill: 0.5,
        lineWidth: 0,
        order: 2,
      },
    }, {
      label: 'Facebook',
      data: data[2],
      bars: {
        show: true,
        barWidth: 12 * 24 * 60 * 60 * 300,
        fill: 0.5,
        lineWidth: 0,
        order: 3,
      },
    }];
  }

  createChart(dataSeries) {
    return jQuery.plot(jQuery(this.chartContainer.nativeElement), dataSeries, {
      series: {
        bars: {
          show: true,
          barWidth: 12 * 24 * 60 * 60 * 350,
          lineWidth: 0,
          order: 1,
          fillColor: {
            colors: [{
              opacity: 1,
            }, {
              opacity: 0.7,
            }],
          },
        },
      },
      xaxis: {
        mode: 'time',
        min: 1387497600000,
        max: 1400112000000,
        tickLength: 0,
        tickSize: [1, 'month'],
        axisLabel: 'Month',
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 13,
        axisLabelPadding: 15,
        font: {
          color: '#fff',
        }
      },
      yaxis: {
        axisLabel: 'Value',
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 13,
        axisLabelPadding: 5,
        font: {
          color: '#fff',
        }
      },
      grid: {
        hoverable: true,
        borderWidth: 0,
        color: '#ffffff'
      },
      legend: {
        backgroundColor: 'transparent',
        labelBoxBorderColor: 'none',
      },
      colors: ['#a7beff', '#ace5d1', '#ffd7de'],
    });
  }

  ngAfterViewInit() {
    this.createChart(this.getDataSeries(this.getBarChartData()));
  }
}
