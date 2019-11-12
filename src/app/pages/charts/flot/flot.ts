import { Component } from '@angular/core';

import { apexOptions4, apexOptions5, apexOptions6, apexOptions7, apexOptions8, apexOptions9 } from '../../../utils/apex-charts.data';
import { echartBarChartData3, echartBarChartData4 } from '../../../utils/echarts.data';

@Component({
  selector: 'flot',
  templateUrl: './flot.html'
})
export class FlotComponent {
  public apexOptions5: any = apexOptions5;
  public apexOptions6: any = apexOptions6;
  public apexOptions4: any = apexOptions4;
  public apexOptions7: any = apexOptions7;
  public apexOptions8: any = apexOptions8;
  public apexOptions9: any = apexOptions9;

  public echartBarChartData3: any = echartBarChartData3;
  public echartBarChartData4: any = echartBarChartData4;
}
