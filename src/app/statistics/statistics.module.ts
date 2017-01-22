import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {RickshawChartModule} from '../components/rickshaw/rickshaw.module';
import { JqSparklineModule } from '../components/sparkline/sparkline.module';
import { FlotChartModule } from '../components/flot/flot.module';

import {Stats} from './stats/stats.component'
import {Charts} from './charts/charts.component'
import {FlotChartAnimator} from  './charts/flot-chart-animator/flot-chart-animator.directive';
import {Realtime} from './realtime/realtime.component'

import 'jquery-ui';
import 'jquery-ui/ui/widgets/sortable.js';
import 'jquery-ui/ui/widgets/resizable.js';
import 'easy-pie-chart/dist/jquery.easypiechart.js';

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {path: '', redirectTo: 'stats', pathMatch: 'full'},
  {path: 'stats', component: Stats},
  {path: 'charts', component: Charts},
  {path: 'realtime', component: Realtime},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Stats,
    Charts,
    Realtime,
    FlotChartAnimator
  ],
  imports: [
    CommonModule,
    FormsModule,
    RickshawChartModule,
    RouterModule.forChild(routes),
    JqSparklineModule,
    FlotChartModule
  ]
})
export default class StatisticsModule {
  static routes = routes;
}
