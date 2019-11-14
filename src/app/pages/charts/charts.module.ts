import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WidgetModule } from '../../layout/widget/widget.module';
import { Nvd3ChartModule } from '../../components/nvd3/nvd3.module';
import { RickshawChartModule } from '../../components/rickshaw/rickshaw.module';
import { MorrisComponent } from './morris/morris';
import { FlotComponent } from './flot/flot';
import { SparklineComponent } from './sparkline/sparkline';
import { OverviewComponent } from './overview/overview';
import { EasyPieComponent } from './easy-pie/easy-pie';
import { NewWidgetModule } from '../../layout/new-widget/widget.module';
import { AlertModule, ProgressbarModule } from 'ngx-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';

export const routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'flot', component: FlotComponent },
  { path: 'morris', component: MorrisComponent },
  { path: 'sparkline', component: SparklineComponent },
  { path: 'easy-pie', component: EasyPieComponent },
];

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    Nvd3ChartModule,
    RickshawChartModule,
    RouterModule.forChild(routes),
    NewWidgetModule,
    AlertModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgApexchartsModule,
    NgxChartsModule,
    NgxEchartsModule
  ],
  declarations: [
    OverviewComponent,
    FlotComponent,
    MorrisComponent,
    SparklineComponent,
    EasyPieComponent
  ]
})
export class ChartsModule {
  static routes = routes;
}
