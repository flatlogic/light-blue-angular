import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Login } from './login.component';
import {NewWidgetModule} from '../../layout/new-widget/widget.module';
import {AlertModule} from 'ngx-bootstrap';

export const routes = [
  { path: '', component: Login, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NewWidgetModule,
    AlertModule.forRoot()
  ]
})
export class LoginModule {
  static routes = routes;
}
