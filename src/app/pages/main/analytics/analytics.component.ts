import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import mock from './mock';
import { AnalyticsService } from './analytics.service';
import { echartPieChartData3, echartAreaChartData } from '../../../utils/data/echarts.data';
import { CalendarEvent } from 'angular-calendar';
import { calendarEvents } from '../../../utils/data/calendar-events.data';

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

  public viewDate: Date = new Date();
  public calendarEvents: CalendarEvent[] = [...calendarEvents];


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

  public onEventClick({ event, sourceEvent }: { event: CalendarEvent; sourceEvent: MouseEvent | KeyboardEvent; }): void {
    if (Array.isArray(event.actions)) {
      event.actions.forEach(a => {
        a.onClick({ event, sourceEvent });
      });
    }
  }
}
