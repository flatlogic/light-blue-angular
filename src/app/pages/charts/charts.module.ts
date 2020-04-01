import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { HighchartsChartModule } from 'highcharts-angular';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { OverviewComponent } from './overview/overview';
import { HighchartsComponent } from './highcharts/highcharts.component';
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
    NgApexchartsModule,
    NgxChartsModule,
    NgxEchartsModule,
    HighchartsChartModule,
    WidgsterModule,
    AlertModule,
    ProgressbarModule
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
