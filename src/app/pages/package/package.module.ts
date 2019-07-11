import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Package } from './package.component';
import { WidgetModule } from '../../layout/widget/widget.module';

export const routes = [
  { path: '', component: Package, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Package
  ],
  imports: [
    CommonModule,
    WidgetModule,
    RouterModule.forChild(routes),
  ]
})
export class PackageModule {
  static routes = routes;
}
