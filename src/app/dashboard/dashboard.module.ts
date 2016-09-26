import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Dashboard } from './dashboard.component';
import { Chat } from './chat/chat.component';
import { SlimScroll} from 'ng2-slimscroll'

export const routes = [
  { path: '', component: Dashboard, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Dashboard,
    Chat,
    SlimScroll
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
