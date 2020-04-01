import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';

import { Login } from './login.component';
import { WidgsterModule } from '../../components/widgster/widgster.module';

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
    WidgsterModule,
    AlertModule
  ]
})
export class LoginModule { }
