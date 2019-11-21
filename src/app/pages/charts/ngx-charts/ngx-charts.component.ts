import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ngxLineChartData,
  ngxAreaChartData,
  ngxVerticalBarChartData,
  ngxDoughnutChartData,
  ngxGroupedVerticalBarChartData,
  ngxStackedVerticalBarChartData
} from '../../../utils/ngx-charts.data';

@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxChartsComponent {
  public ngxLineChartData: any = ngxLineChartData;
  public ngxAreaChartData: any = ngxAreaChartData;
  public ngxVerticalBarChartData: any = ngxVerticalBarChartData;
  public ngxDoughnutChartData: any = ngxDoughnutChartData;
  public ngxGroupedVerticalBarChartData: any = ngxGroupedVerticalBarChartData;
  public ngxStackedVerticalBarChartData: any = ngxStackedVerticalBarChartData;
}
