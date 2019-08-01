import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'bars-stacked-chart',
  templateUrl: './bars-stacked-chart.html'
})
export class BarsStackedChartComponent implements AfterViewInit {
  @ViewChild('chartContainer', {static: true}) chartContainer: ElementRef;

  getStackedBarChartData() {
    const seriesCount = 3;
    const tickCount = 10;
    let series = [];
    const data = [];

    for (let i = 0; i < seriesCount; i += 1) {
      series = [];

      for (let j = 0; j < tickCount; j += 1) {
        series.push([j, Math.random() * 30]);
      }

      data.push(series);
    }

    return data;
  }

  createChart(data) {
    return jQuery.plot(jQuery(this.chartContainer.nativeElement), data, {
      series: {
        stack: true,
        bars: {
          show: true,
          barWidth: 0.45,
          lineWidth: 1,
          fill: 0.75,
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
      xaxis: {
        min: 1,
        tickLength: 0,
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 13,
        axisLabelPadding: 15,
        font: {
          color: '#fff',
        },
      },
      yaxis: {
        font: {
          color: '#fff',
        },
      },
      colors: ['#E5E5FF', '#C0BDFF', '#D7E0FF'],
    });
  }

  ngAfterViewInit() {
    this.createChart(this.getStackedBarChartData());
  }
}
