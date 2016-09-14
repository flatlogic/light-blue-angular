import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {Calendar} from './calendar'
import {Maps} from './maps'
import {Gallery} from './gallery'
import {Fileupload} from './fileupload'

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {path: '', redirectTo: 'calendar', pathMatch: 'full'},
  {path: 'calendar', component: Calendar},
  {path: 'maps', component: Maps},
  {path: 'gallery', component: Gallery},
  {path: 'fileupload', component: Fileupload}

];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Calendar,
    Maps,
    Gallery,
    Fileupload
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
