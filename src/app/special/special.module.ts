import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {Search} from './search/search.component'
import {Invoice} from './invoice/invoice.component'
import {Inbox} from './inbox/inbox.component'

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: Search},
  {path: 'invoice', component: Invoice},
  {path: 'inbox', component: Inbox}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Search,
    Invoice,
    Inbox
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class StatisticsModule {
  static routes = routes;
}
