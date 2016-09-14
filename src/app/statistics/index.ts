import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {Stats} from './stats'
import {Charts} from './charts'
import {Realtime} from './realtime'

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
    Realtime
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class StatisticsModule {
  static routes = routes;
}
