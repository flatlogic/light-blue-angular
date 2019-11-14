import { Component, ViewEncapsulation, AfterViewInit, OnDestroy } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

import { apexOptions1, apexOptions2 } from '../../../utils/apex-charts.data';
import { echartLineBarData, echartDynamicAreaData2, echartBarChartData5, echartLineChartData3 } from '../../../utils/echarts.data';

@Component({
  selector: 'widgets',
  templateUrl: './widgets.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./widgets.style.scss']
})
export class WidgetsComponent implements AfterViewInit, OnDestroy {
  public apexOptions1: ApexOptions = apexOptions1;
  public apexOptions2: ApexOptions = apexOptions2;
  public echartDynamicAreaData2: any = echartDynamicAreaData2;
  public echartDynamicAreaDataUpdate: any;
  public echartBarChartData5: any = echartBarChartData5;
  public echartLineBarData: any = echartLineBarData;
  public echartLineChartData3: any = echartLineChartData3;

  private interval: any;

  public ngAfterViewInit(): void {
    this.interval = setInterval(() => {
      const data1: any = this.echartDynamicAreaData2.series[0].data;
      const data2: any = this.echartDynamicAreaData2.series[1].data;
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
