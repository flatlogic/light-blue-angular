import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import mock from './mock';
import { AnalyticsService } from './analytics.service';
import { echartPieChartData3, echartAreaChartData } from '../../../utils/echarts.data';

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
  public echartPieChartData3: any = echartPieChartData3;
  public echartAreaChartData: any = echartAreaChartData;

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
  }

  getRandomData() {
    const arr = [];

    for (let i = 0; i < 25; i += 1) {
      arr.push(+Math.random().toFixed(1) * 10);
    }
    return arr;
  }

  ngOnInit() {
    this.analyticsService.receiveDataRequest();
  }
}
