import { Component } from '@angular/core';
import {
  echartBarChartData,
  echartPieChartData,
  echartAreaChartData,
  echartLineChartData,
  echartPieChartData2,
  echartBarChartData2,
  echartLineChartData2
} from '../../../utils/echarts.data';

@Component({
  selector: 'sparkline',
  templateUrl: './sparkline.html'
})
export class SparklineComponent {
  public echartBarChartData: any = echartBarChartData;
  public echartPieChartData: any = echartPieChartData;
  public echartAreaChartData: any = echartAreaChartData;
  public echartLineChartData: any = echartLineChartData;
  public echartPieChartData2: any = echartPieChartData2;
  public echartBarChartData2: any = echartBarChartData2;
  public echartLineChartData2: any = echartLineChartData2;
}
