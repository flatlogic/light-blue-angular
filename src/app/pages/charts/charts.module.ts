import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { OverviewComponent } from './overview/overview';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { AlertModule, ProgressbarModule } from 'ngx-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { HighchartsChartModule } from 'highcharts-angular';
import { WidgsterModule } from '../../components/widgster/widgster.module';

export const routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'apexcharts', component: ApexchartsComponent },
  { path: 'ngx-charts', component: NgxChartsComponent },
  { path: 'echarts', component: EchartsComponent },
  { path: 'highcharts', component: HighchartsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AlertModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgApexchartsModule,
    NgxChartsModule,
    NgxEchartsModule,
    HighchartsChartModule,
    WidgsterModule
  ],
  declarations: [
    OverviewComponent,
    ApexchartsComponent,
    NgxChartsComponent,
    EchartsComponent,
    HighchartsComponent
  ]
})
export class ChartsModule {
}
