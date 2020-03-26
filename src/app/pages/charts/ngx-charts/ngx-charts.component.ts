import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import {
  ngxLineChartData,
  ngxAreaChartData,
  ngxVerticalBarChartData,
  ngxDoughnutChartData,
  ngxGroupedVerticalBarChartData,
  ngxStackedVerticalBarChartData
} from '../../../utils/data/ngx-charts.data';

@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxChartsComponent implements AfterViewInit {
  public ngxLineChartData: any = ngxLineChartData;
  public ngxAreaChartData: any = ngxAreaChartData;
  public ngxVerticalBarChartData: any = ngxVerticalBarChartData;
  public ngxDoughnutChartData: any;
  public ngxGroupedVerticalBarChartData: any = ngxGroupedVerticalBarChartData;
  public ngxStackedVerticalBarChartData: any = ngxStackedVerticalBarChartData;

  public ngAfterViewInit(): void {
    // chart fails to calculate correct width on init
    this.ngxDoughnutChartData = ngxDoughnutChartData;
  }
}
