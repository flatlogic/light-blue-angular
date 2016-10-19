import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import 'jquery-slimscroll';

import { Dashboard } from './dashboard.component';
import { Chat } from './chat/chat.component';
import {Widget} from '../layout/widget/widget.directive';

import { Nvd3ChartModule } from './nvd3/nvd3.module';

export const routes = [
  { path: '', component: Dashboard, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Dashboard,
    Chat,
    Widget
  ],
  imports: [
    CommonModule,
    FormsModule,
    Nvd3ChartModule,
    RouterModule.forChild(routes),
  ]
})
export default class LoginModule {
  static routes = routes;
}
