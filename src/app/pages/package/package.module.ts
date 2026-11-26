import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Package } from './package.component';
import { WidgsterModule } from '../../components/widgster/widgster.module';

export const routes: Routes = [
  { path: '', component: Package, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Package
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgsterModule
  ]
})
export class PackageModule { }
