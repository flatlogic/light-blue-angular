import {Component, ViewChild, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import mock from './mock';

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
  table = [
      {
        id: 0,
        name: 'Mark Otto',
        email: 'ottoto@wxample.com',
        product: 'ON the Road',
        price: '$25 224.2',
        date: '11 May 2017',
        city: 'Otsego',
        status: 'Sent',
      },
      {
        id: 1,
        name: 'Jacob Thornton',
        email: 'thornton@wxample.com',
        product: 'HP Core i7',
        price: '$1 254.2',
        date: '4 Jun 2017',
        city: 'Fivepointville',
        status: 'Sent',
      },
      {
        id: 2,
        name: 'Larry the Bird',
        email: 'bird@wxample.com',
        product: 'Air Pro',
        price: '$1 570.0',
        date: '27 Aug 2017',
        city: 'Leadville North',
        status: 'Pending',
      },
      {
        id: 3,
        name: 'Joseph May',
        email: 'josephmay@wxample.com',
        product: 'Version Control',
        price: '$5 224.5',
        date: '19 Feb 2018',
        city: 'Seaforth',
        status: 'Declined',
      },
      {
        id: 4,
        name: 'Peter Horadnia',
        email: 'horadnia@wxample.com',
        product: 'Let\'s Dance',
        price: '$43 594.7',
        date: '1 Mar 2018',
        city: 'Hanoverton',
        status: 'Sent',
      }
    ];

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

  constructor() {
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

  getData() {
    const data = [];
    const seriesCount = 3;
    const accessories = ['SMX', 'Direct', 'Networks'];

    for (let i = 0; i < seriesCount; i += 1) {
      data.push({
        label: accessories[i],
        data: Math.floor(Math.random() * 100) + 1,
      });
    }
    return data;
  }

  initChart() {
    jQuery.plot($(this.chartContainer.nativeElement), this.getData(), {
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
    this.initChart();
  }
}
