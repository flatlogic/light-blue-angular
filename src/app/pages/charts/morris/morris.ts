import { Component } from '@angular/core';
import {
  ngxLineChartData,
  ngxAreaChartData,
  ngxVerticalBarChartData,
  ngxDoughnutChartData,
  ngxGroupedVerticalBarChartData,
  ngxStackedVerticalBarChartData
} from '../../../utils/ngx-charts.data';

@Component({
  selector: 'morris',
  templateUrl: './morris.html'
})
export class MorrisComponent {
  public ngxLineChartData: any = ngxLineChartData;
  public ngxAreaChartData: any = ngxAreaChartData;
  public ngxVerticalBarChartData: any = ngxVerticalBarChartData;
  public ngxDoughnutChartData: any = ngxDoughnutChartData;
  public ngxGroupedVerticalBarChartData: any = ngxGroupedVerticalBarChartData;
  public ngxStackedVerticalBarChartData: any = ngxStackedVerticalBarChartData;
}
