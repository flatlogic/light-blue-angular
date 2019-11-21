import { Component, ViewChildren, QueryList, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

import { apexOptions4, apexOptions5, apexOptions6, apexOptions7, apexOptions8, apexOptions9 } from '../../../utils/apex-charts.data';
import { echartBarChartData3, echartBarChartData4 } from '../../../utils/echarts.data';

@Component({
  selector: 'app-apexcharts',
  templateUrl: './apexcharts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApexchartsComponent implements OnDestroy {
  public apexOptions5: any = apexOptions5;
  public apexOptions6: any = apexOptions6;
  public apexOptions4: any = apexOptions4;
  public apexOptions7: any = apexOptions7;
  public apexOptions8: any = apexOptions8;
  public apexOptions9: any = apexOptions9;
  @ViewChildren(ChartComponent) public apexchartsList: QueryList<ChartComponent>;

  public echartBarChartData3: any = echartBarChartData3;
  public echartBarChartData4: any = echartBarChartData4;

  public ngOnDestroy(): void {
    this.apexchartsList.forEach((c: ChartComponent) => {
      if (Boolean(c)) { c.destroy(); }
    });
  }
}
