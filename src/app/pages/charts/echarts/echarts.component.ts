import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  echartBarChartData,
  echartPieChartData,
  echartAreaChartData,
  echartLineChartData,
  echartPieChartData2,
  echartBarChartData2,
  echartLineChartData2
} from '../../../utils/data/echarts.data';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EchartsComponent {
  public echartBarChartData: any = echartBarChartData;
  public echartPieChartData: any = echartPieChartData;
  public echartAreaChartData: any = echartAreaChartData;
  public echartLineChartData: any = echartLineChartData;
  public echartPieChartData2: any = echartPieChartData2;
  public echartBarChartData2: any = echartBarChartData2;
  public echartLineChartData2: any = echartLineChartData2;
}
