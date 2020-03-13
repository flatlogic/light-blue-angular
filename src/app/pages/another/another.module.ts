import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AnotherComponent} from './another.component';
import {NewWidgetModule} from "../../layout/new-widget/widget.module";

export const routes = [
  {path: '', component: AnotherComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AnotherComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NewWidgetModule
  ]
})
export class AnotherModule {
  static routes = routes;
}
