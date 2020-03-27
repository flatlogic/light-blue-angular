import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RegisterComponent} from './register.component';
import {AlertModule} from 'ngx-bootstrap';
import {RegisterService} from './register.service';
import { WidgsterModule } from '../../components/widgster/widgster.module';

export const routes = [
  {path: '', component: RegisterComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AlertModule.forRoot(),
    WidgsterModule
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule {
  static routes = routes;
}
