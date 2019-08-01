import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'donut-chart',
  templateUrl: './donut-chart.html'
})
export class DonutChartComponent implements AfterViewInit {
  @ViewChild('chartContainer', {static: true}) chartContainer: ElementRef;
  @ViewChild('chartLegend', {static: true}) chartLegend: ElementRef;

  getPieChartData() {
    const data = [];
    const seriesCount = 4;
    const accessories = ['Rolex', 'Tissot', 'Orient', 'Other'];

    for (let i = 0; i < seriesCount; i += 1) {
      data.push({
        label: accessories[i],
        data: Math.floor(Math.random() * 100) + 1,
      });
    }

    return data;
  }

  createChart(data) {
    return jQuery.plot(jQuery(this.chartContainer.nativeElement), data, {
      series: {
        pie: {
          innerRadius: 0.5,
          show: true,
          fill: 0.7,
        },
      },
      colors: ['#8fe5d4', '#ace5d1', '#ffebb2', '#fff8e3'],
      legend: {
        noColumns: 1,
        container: this.chartLegend.nativeElement,
      },
    });
  }

  ngAfterViewInit() {
    this.createChart(this.getPieChartData());
  }
}
