import {Component, ViewChild, ElementRef, ViewEncapsulation, OnInit} from '@angular/core';
import mock from './mock';
import {AnalyticsService} from './analytics.service';

declare let jQuery: any;

@Component({
  selector: 'analytics',
  templateUrl: './analytics.template.html',
  styleUrls: ['./analytics.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnalyticsComponent implements OnInit {
  now = new Date();
  month = this.now.getMonth() + 1;
  year = this.now.getFullYear();
  mock = mock;

  calendarEvents: Array<Array<any>> = [
    [
      '2/' + this.month + '/' + this.year,
      'The flower bed',
      '#',
      '#5d8fc2',
      'Contents here'
    ],
    [
      '5/' + this.month + '/' + this.year,
      'Stop world water pollution',
      '#',
      '#f0b518',
      'Have a kick off meeting with .inc company'
    ],
    [
      '18/' + this.month + '/' + this.year,
      'Light Blue 2.2 release',
      '#',
      '#64bd63',
      'Some contents here'
    ],
    [
      '29/' + this.month + '/' + this.year,
      'A link',
      'http://www.flatlogic.com',
      '#dd5826',
    ]
  ];

  @ViewChild('chartContainer', {static: true}) chartContainer: ElementRef;
  @ViewChild('chartLegend', {static: true}) chartLegend: ElementRef;

  trends: Array<any> = [
    {
      gradient: '#ffc247',
    },
    {
      gradient: '#4e85bd',
    },
    {
      gradient: '#3abf94',
    }
  ];

  constructor(public analyticsService: AnalyticsService) {
    this.trends.map(t => {
      t.data = this.getRandomData();
    });

    this.analyticsService.onReceiveDataSuccess.subscribe(event => {
      if (event) {
        this.initChart();
      }
    });
  }

  getRandomData() {
    const arr = [];

    for (let i = 0; i < 25; i += 1) {
      arr.push(+Math.random().toFixed(1) * 10);
    }
    return arr;
  }

  initChart() {
    jQuery.plot($(this.chartContainer.nativeElement), this.analyticsService.revenue, {
      series: {
        pie: {
          innerRadius: 0.8,
          show: true,
          fill: 0.5,
        },
      },
      colors: ['#ffc247', '#f55d5d', '#9964e3'],
      legend: {
        noColumns: 1,
        container: $(this.chartLegend.nativeElement),
        labelBoxBorderColor: '#ffffff',
      },
      grid: {
        color: '#fff'
      }
    });
  }

  ngOnInit() {
    this.analyticsService.receiveDataRequest();
  }
}
