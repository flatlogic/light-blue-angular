import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { AnotherComponent } from './another.component';

export const routes = [
  { path: '', component: AnotherComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [ AnotherComponent ]
})
export class AnotherModule {
  static routes = routes;
}
