import { Component, ChangeDetectionStrategy } from '@angular/core';

import { apexOptions4, apexOptions5, apexOptions6, apexOptions7, apexOptions8, apexOptions9 } from '../../../utils/data/apex-charts.data';
import { apexBarChartData1, apexBarChartData2 } from '../../../utils/data/echarts.data';

@Component({
  standalone: false,
  selector: 'app-apexcharts',
  templateUrl: './apexcharts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApexchartsComponent {
  public apexOptions5: any = apexOptions5;
  public apexOptions6: any = apexOptions6;
  public apexOptions4: any = apexOptions4;
  public apexOptions7: any = apexOptions7;
  public apexOptions8: any = apexOptions8;
  public apexOptions9: any = apexOptions9;

  public apexBarChartData1: any = apexBarChartData1;
  public apexBarChartData2: any = apexBarChartData2;

}
