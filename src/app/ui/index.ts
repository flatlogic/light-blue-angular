import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {Buttons} from './buttons'
import {Dialogs} from './dialogs'
import {Icons} from './icons'
import {Tabs} from './tabs'
import {Accordion} from './accordion'

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {path: '', redirectTo: 'buttons', pathMatch: 'full'},
  {path: 'buttons', component: Buttons},
  {path: 'dialogs', component: Dialogs},
  {path: 'icons', component: Icons},
  {path: 'tabs', component: Tabs},
  {path: 'accordion', component: Accordion},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Buttons,
    Dialogs,
    Icons,
    Tabs,
    Accordion
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
