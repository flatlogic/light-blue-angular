import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';

import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';
import { WidgsterModule } from '../../components/widgster/widgster.module';

export const routes = [
  { path: '', component: RegisterComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    WidgsterModule,
    AlertModule
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule { }
