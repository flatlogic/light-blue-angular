import { Component, OnInit, ViewEncapsulation, AfterViewInit, OnDestroy } from '@angular/core';
import { echartDynamicAreaData3 } from '../../../utils/echarts.data';

@Component({
  selector: 'visits',
  templateUrl: './visits.template.html',
  styleUrls: ['./visits.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VisitsComponent implements OnInit, AfterViewInit, OnDestroy {
  config: any;
  month: any;
  year: any;
  public echartDynamicAreaData3: any = echartDynamicAreaData3;
  public echartDynamicAreaDataUpdate: any;

  private interval: any;

  constructor() {
  }

  ngOnInit(): void {
    const now = new Date();
    this.month = now.getMonth() + 1;
    this.year = now.getFullYear();
  }
  public ngAfterViewInit(): void {
    this.interval = setInterval(() => {
      const data1: any = this.echartDynamicAreaData3.series[0].data;
      const data2: any = this.echartDynamicAreaData3.series[1].data;
      data1.shift();
      data1.push(parseInt(Math.round(Math.random() * 1000).toFixed(0), 10));
      data2.shift();
      data2.push(parseInt((Math.random() * 10 + 5).toFixed(0), 10));
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
