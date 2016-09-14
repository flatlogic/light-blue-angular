import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {Basic} from './basic'
import {Live} from './live'

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {path: '', redirectTo: 'basic', pathMatch: 'full'},
  {path: 'basic', component: Basic},
  {path: 'live', component: Live}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Basic,
    Live
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
