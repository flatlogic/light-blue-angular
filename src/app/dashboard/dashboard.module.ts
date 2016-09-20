import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Dashboard } from './dashboard.component';

export const routes = [
  { path: '', component: Dashboard, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Dashboard
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class LoginModule {
  static routes = routes;
}
