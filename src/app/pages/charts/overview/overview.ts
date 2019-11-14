import { Component, OnInit, ViewEncapsulation, AfterViewInit, OnDestroy } from '@angular/core';

import { apexOptions3, apexOptions4 } from '../../../utils/apex-charts.data';
import { ngxAreaChartData, ngxLineChartData, ngxDoughnutChartData } from '../../../utils/ngx-charts.data';
import {
  echartBarChartData3,
  echartBarChartData4,
  echartPieChartData,
  echartLineChartData2,
  echartAreaChartData2,
  echartDynamicAreaData
} from '../../../utils/echarts.data';

declare let jQuery: any;
declare let Rickshaw: any;
declare let d3: any;
declare let nv: any;

@Component({
  selector: '[charts-overview]',
  templateUrl: './overview.html',
  styleUrls: ['./overview.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit, AfterViewInit, OnDestroy {
  public apexOptions3: any = apexOptions3;
  public apexOptions4: any = apexOptions4;

  public ngxAreaChartData: any = ngxAreaChartData;
  public ngxLineChartData: any = ngxLineChartData;
  public ngxDoughnutChartData: any = ngxDoughnutChartData;

  public echartBarChartData3: any = echartBarChartData3;
  public echartBarChartData4: any = echartBarChartData4;
  public echartPieChartData: any = echartPieChartData;
  public echartLineChartData2: any = echartLineChartData2;
  public echartAreaChartData2: any = echartAreaChartData2;
  public echartDynamicAreaData: any = echartDynamicAreaData;
  public echartDynamicAreaDataUpdate: any;

  private interval: any;

  seriesData: Array<any> = [[], []];
  random: any;
  series: Array<any>;
  flotBarsData: Array<any>;
  flotBarsOptions: any;
  nvd31Chart: any;
  nvd31Data: any;
  nvd32Chart: any;
  nvd32Data: any;

  data1: Array<any> = [
    [1, 20],
    [2, 20],
    [3, 40],
    [4, 30],
    [5, 40],
    [6, 35],
    [7, 47]
  ];
  data2: Array<any> = [
    [1, 13],
    [2, 8],
    [3, 17],
    [4, 10],
    [5, 17],
    [6, 15],
    [7, 16]
  ];
  data3: Array<any> = [
    [1, 23],
    [2, 13],
    [3, 33],
    [4, 16],
    [5, 32],
    [6, 28],
    [7, 31]
  ];

  applyRickshawData(): void {
    this.random = new Rickshaw.Fixtures.RandomData(30);
    for (let i = 0; i < 30; i++) {
      this.random.addData(this.seriesData);
    }
    this.series = [
      {
        color: '#17a2b8',
        data: this.seriesData[0],
        name: 'Uploads'
      }, {
        color: '#1ac7e0',
        data: this.seriesData[1],
        name: 'Downloads'
      }
    ];
  }

  applyNvd3Data(): void {
    /* Inspired by Lee Byron's test data generator. */
    function _stream_layers(n, m, o): Array<any> {
      if (arguments.length < 3) { o = 0; }
      function bump(a): void {
        const x = 1 / (.1 + Math.random()),
          y = 2 * Math.random() - .5,
          z = 10 / (.1 + Math.random());
        for (let i = 0; i < m; i++) {
          const w = (i / m - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      }
      return d3.range(n).map(function (): Array<Object> {
        const a = [];
        let i;
        for (i = 0; i < m; i++) { a[i] = o + o * Math.random(); }
        for (i = 0; i < 5; i++) { bump(a); }
        return a.map(function (d, iItem): Object {
          return { x: iItem, y: Math.max(0, d) };
        });
      });
    }

    function testData(streamNames, pointCount): Array<any> {
      const now = new Date().getTime(),
        day = 1000 * 60 * 60 * 24, // milliseconds
        daysAgoCount = 60,
        daysAgo = daysAgoCount * day,
        daysAgoDate = now - daysAgo,
        pointsCount = pointCount || 45, // less for better performance
        daysPerPoint = daysAgoCount / pointsCount;
      return _stream_layers(streamNames.length, pointsCount, .1).map(function (data, i): Object {
        return {
          key: streamNames[i],
          values: data.map(function (d, j): Object {
            return {
              x: daysAgoDate + d.x * day * daysPerPoint,
              y: Math.floor(d.y * 100) // just a coefficient,
            };
          })
        };
      });
    }

    this.nvd31Chart = nv.models.lineChart()
      .useInteractiveGuideline(true)
      .margin({ left: 28, bottom: 30, right: 0 })
      .color(['#ff6e7c', '#5faaff']);

    this.nvd31Chart.xAxis
      .showMaxMin(false)
      .tickFormat(function (d): Object { return d3.time.format('%b %d')(new Date(d)); });

    this.nvd31Chart.yAxis
      .showMaxMin(false)
      .tickFormat(d3.format(',f'));

    this.nvd31Data = testData(['Search', 'Referral'], 50).map(function (el, i): boolean {
      el.area = true;
      return el;
    });

    this.nvd32Chart = nv.models.multiBarChart()
      .margin({ left: 28, bottom: 30, right: 0 })
      .color(['#4ce5d3', '#ff3d43']);

    this.nvd32Chart.xAxis
      .showMaxMin(false)
      .tickFormat(function (d): Object { return d3.time.format('%b %d')(new Date(d)); });

    this.nvd32Chart.yAxis
      .showMaxMin(false)
      .tickFormat(d3.format(',f'));

    this.nvd32Data = testData(['Uploads', 'Downloads'], 10).map(function (el, i): boolean {
      el.area = true;
      return el;
    });
  }

  ngOnInit(): void {
    this.applyRickshawData();

    this.applyNvd3Data();

    jQuery('.easy-pie-chart-md').easyPieChart({
      barColor: '#8fe5d4',
      trackColor: '#f8f9fa',
      scaleColor: false,
      lineWidth: 10,
      size: 120
    });

    const barCustomised1 = [
      [1388534400000, 120],
      [1391212800000, 70],
      [1393632000000, 100],
      [1396310400000, 60],
      [1398902400000, 35]
    ];
    const barCustomised2 = [
      [1388534400000, 90],
      [1391212800000, 60],
      [1393632000000, 30],
      [1396310400000, 73],
      [1398902400000, 30]
    ];
    const barCustomised3 = [
      [1388534400000, 80],
      [1391212800000, 40],
      [1393632000000, 47],
      [1396310400000, 22],
      [1398902400000, 24]
    ];
    this.flotBarsData = [
      {
        label: 'Apple',
        data: barCustomised1,
        bars: {
          show: true,
          barWidth: 12 * 24 * 60 * 60 * 300,
          fill: true,
          lineWidth: 0,
          order: 1
        }
      },
      {
        label: 'Google',
        data: barCustomised2,
        bars: {
          show: true,
          barWidth: 12 * 24 * 60 * 60 * 300,
          fill: true,
          lineWidth: 0,
          order: 2
        }
      },
      {
        label: 'Facebook',
        data: barCustomised3,
        bars: {
          show: true,
          barWidth: 12 * 24 * 60 * 60 * 300,
          fill: true,
          lineWidth: 0,
          order: 3
        }
      }

    ];

    this.flotBarsOptions = {
      series: {
        bars: {
          show: true,
          barWidth: 12 * 24 * 60 * 60 * 350,
          lineWidth: 0,
          order: 1,
          fillColor: {
            colors: [{
              opacity: 1
            }, {
              opacity: 0.7
            }]
          }
        }
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
        axisLabelPadding: 15
      },
      yaxis: {
        axisLabel: 'Value',
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 13,
        axisLabelPadding: 5
      },
      grid: {
        hoverable: true,
        borderWidth: 0
      },
      legend: {
        backgroundColor: 'transparent',
        labelBoxBorderColor: 'none'
      },
      colors: ['#a7beff', '#ace5d1', '#ffd7de']
    };
  }

  public ngAfterViewInit(): void {
    this.interval = setInterval(() => {
      const data1: any = this.echartDynamicAreaData.series[0].data;
      const data2: any = this.echartDynamicAreaData.series[1].data;
      data1.shift();
      data1.push(Math.round(Math.random() * 1000));
      data2.shift();
      data2.push(parseFloat((Math.random() * 10 + 5).toFixed(1)) - 0);
      this.echartDynamicAreaDataUpdate = {
        series: [
          { data: data1 },
          { data: data2 }
        ]
      };
    }, 3000);
  }

  public ngOnDestroy(): void {
    if (this.interval) { clearInterval(this.interval); }
  }
}
