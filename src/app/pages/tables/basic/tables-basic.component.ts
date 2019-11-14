import { Component } from '@angular/core';
import {
  echartBarChartData6,
  echartBarChartData7,
  echartBarChartData8,
  echartBarChartData9,
  echartBarChartData10
} from '../../../utils/echarts.data';

@Component({
  selector: '[tables-basic]',
  templateUrl: './tables-basic.template.html'
})
export class TablesBasicComponent {
  public echartBarChartData6: any = echartBarChartData6;
  public echartBarChartData7: any = echartBarChartData7;
  public echartBarChartData8: any = echartBarChartData8;
  public echartBarChartData9: any = echartBarChartData9;
  public echartBarChartData10: any = echartBarChartData10;
}
