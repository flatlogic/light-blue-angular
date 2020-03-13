import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AnalyticsComponent} from './analytics.component';
import {NewWidgetModule} from "../../layout/new-widget/widget.module";

export const routes = [
  {path: '', component: AnalyticsComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AnalyticsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NewWidgetModule
  ]
})
export class AnalyticsModule {
  static routes = routes;
}
