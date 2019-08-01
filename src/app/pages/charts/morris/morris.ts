import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

import 'webpack-raphael/raphael';
import 'govpredict-morris/morris.js';

declare let Morris: any;
declare let jQuery: any;

@Component({
  selector: 'morris',
  templateUrl: './morris.html'
})
export class MorrisComponent implements AfterViewInit {
  @ViewChild('morrisLineChart', {static: true}) morrisLineChart: ElementRef;
  @ViewChild('morrisAreaChart', {static: true}) morrisAreaChart: ElementRef;
  @ViewChild('morrisBarChart', {static: true}) morrisBarChart: ElementRef;
  @ViewChild('morrisDonutChart', {static: true}) morrisDonutChart: ElementRef;
  @ViewChild('morrisBar2Chart', {static: true}) morrisBar2Chart: ElementRef;
  @ViewChild('morrisStackedChart', {static: true}) morrisStackedChart: ElementRef;

  initMorrisLineChart() {
    jQuery(this.morrisLineChart.nativeElement).html('');
    Morris.Line({
      element: this.morrisLineChart.nativeElement,
      resize: true,
      data: [
        {y: '2006', a: 100, b: 90},
        {y: '2007', a: 75, b: 65},
        {y: '2008', a: 50, b: 40},
        {y: '2009', a: 75, b: 65},
        {y: '2010', a: 50, b: 40},
        {y: '2011', a: 75, b: 65},
        {y: '2012', a: 100, b: 90},
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      lineColors: ['#8fe5d4', '#ffebb2'],
      gridTextColor: 'white',
    });
  }

  initMorrisAreaChart() {
    jQuery(this.morrisAreaChart.nativeElement).html('');
    Morris.Area({
      element: this.morrisAreaChart.nativeElement,
      resize: true,
      data: [
        {y: '2006', a: 100, b: 90},
        {y: '2007', a: 75, b: 65},
        {y: '2008', a: 50, b: 40},
        {y: '2009', a: 75, b: 65},
        {y: '2010', a: 50, b: 40},
        {y: '2011', a: 75, b: 65},
        {y: '2012', a: 100, b: 90},
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Users A', 'Series B'],
      lineColors: ['#8fe5d4', '#ffd7de'],
      lineWidth: 0,
      gridTextColor: 'white',
    });
  }

  initMorrisBarChart() {
    jQuery(this.morrisBarChart.nativeElement).html('');
    Morris.Bar({
      element: this.morrisBarChart.nativeElement,
      resize: true,
      grid: false,
      data: [
        {y: 4, x: 'Linux'},
        {y: 12, x: 'MacOS'},
        {y: 29, x: 'Windows'},
      ],
      xkey: 'x',
      ykeys: ['y'],
      labels: ['OS Users, %'],
      barColors: ['#b7b3ff'],
      gridTextColor: 'white',
    });
  }

  initMorrisBar2Chart() {
    jQuery(this.morrisBar2Chart.nativeElement).html('');
    Morris.Bar({
      element: this.morrisBar2Chart.nativeElement,
      resize: true,
      grid: false,
      data: [
        {y: '2014', a: 50, b: 90},
        {y: '2015', a: 65, b: 75},
        {y: '2016', a: 50, b: 50},
        {y: '2017', a: 75, b: 60},
        {y: '2018', a: 80, b: 65},
        {y: '2019', a: 90, b: 70},
        {y: '2020', a: 100, b: 75},
        {y: '2021', a: 115, b: 75},
        {y: '2022', a: 120, b: 85},
        {y: '2023', a: 145, b: 85},
        {y: '2024', a: 160, b: 95},
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Total Income', 'Total Outcome'],
      hideHover: 'auto',
      barColors: ['#8fe5d4', '#f59f9f'],
      gridTextColor: 'white',
    });
  }

  initMorrisDonutChart() {
    jQuery(this.morrisDonutChart.nativeElement).html('');
    Morris.Donut({
      element: this.morrisDonutChart.nativeElement,
      resize: true,
      data: [
        {label: 'Download Sales', value: 12},
        {label: 'In-Store Sales', value: 30},
        {label: 'Mail-Order Sales', value: 20},
      ],
      colors: ['#ffd7de', '#ffebb2', '#e2e1ff'],
      labelColor: 'white',
      gridTextColor: 'white',
    });
  }

  initMorrisStackedChart() {
    jQuery(this.morrisStackedChart.nativeElement).html('');
    Morris.Bar({
      element: this.morrisStackedChart.nativeElement,
      stacked: true,
      resize: true,
      gridTextColor: 'white',
      data: [
        {
          y: '2012', a: 3, b: 7, c: 90, d: 0,
        },
        {
          y: '2013', a: 2, b: 7, c: 75, d: 14,
        },
        {
          y: '2014', a: 3, b: 15, c: 65, d: 4,
        },
        {
          y: '2015', a: 3, b: 17, c: 56, d: 20,
        },
        {
          y: '2016', a: 5, b: 16, c: 49, d: 30,
        },
        {
          y: '2017', a: 4, b: 20, c: 40, d: 36,
        },
        {
          y: '2018', a: 5, b: 20, c: 40, d: 35,
        },
      ],
      xkey: 'y',
      ykeys: ['a', 'b', 'c', 'd'],
      barColors: ['#a7beff', '#e2e1ff', '#fff8e3', '#ffd7de'],
      labels: ['Linux', 'MacOS', 'Windows', 'Other'],
      hoverCallback(index, options, content, row) {
        const keys = Object.keys(row).splice(1).sort();
        let tooltip = `
          <div class="card" style="width: 11rem;"><div class="card-body">
              <h5 class="card-title">${row.y} OS Shares</h5>
              <h6 class="card-subtitle mb-2 text-muted">Statistics for most popular Operation Systems Usage</h6>`;

        const rows = [];
        keys.forEach((value, id) => {
          rows.push(
            (`<tr>
                <td>${options.labels[id]}: </td>
                <td>${row[value]}%</td>
              </tr>`).trim(),
          );
        });

        tooltip += '<table class="table"><tbody>';
        tooltip += rows.join('');
        tooltip += '</tbody></table></div></div>';

        return tooltip;
      },
      hideHover: 'auto',
    });
  }

  ngAfterViewInit() {
    this.initMorrisLineChart();
    this.initMorrisAreaChart();
    this.initMorrisBarChart();
    this.initMorrisBar2Chart();
    this.initMorrisDonutChart();
    this.initMorrisStackedChart();
  }
}
