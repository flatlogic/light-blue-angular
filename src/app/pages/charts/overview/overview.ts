import { Component, ViewEncapsulation, AfterViewInit, OnDestroy, ViewChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';

import { apexOptions3, apexOptions4 } from '../../../utils/data/apex-charts.data';
import { ngxAreaChartData, ngxLineChartData, ngxDoughnutChartData } from '../../../utils/data/ngx-charts.data';
import {
  echartBarChartData3,
  echartBarChartData4,
  echartPieChartData,
  echartLineChartData2,
  echartAreaChartData2,
  echartDynamicAreaData,
  echartBarChartData
} from '../../../utils/data/echarts.data';
import {
  smallHighchartsOptions5
} from '../../../utils/data/highcharts.data';
import { ngxGroupedVerticalBarChartData } from '../../../utils/data/ngx-charts.data';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: '[charts-overview]',
  templateUrl: './overview.html',
  styleUrls: ['./overview.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements AfterViewInit, OnDestroy {
  public apexOptions3: any = apexOptions3;
  public apexOptions4: any = apexOptions4;
  @ViewChildren(ChartComponent) public apexchartsList: QueryList<ChartComponent>;

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
  echartBarChartData = echartBarChartData;

  public Highcharts = Highcharts;
  public smallHighchartsOptions5: any = smallHighchartsOptions5;
  public ngxGroupedVerticalBarChartData = ngxGroupedVerticalBarChartData;

  private interval: any;

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
    this.apexchartsList.forEach((c: ChartComponent) => {
      if (Boolean(c)) { c.destroy(); }
    });
  }
}
