import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {Dynamic} from './dynamic'
import {Static} from './static'

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {path: '', redirectTo: 'static', pathMatch: 'full'},
  {path: 'static', component: Static},
  {path: 'dynamic', component: Dynamic}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Static,
    Dynamic
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
