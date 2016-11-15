import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {Buttons} from './buttons/buttons.component'
import {Dialogs} from './dialogs/dialogs.component'
import {Icons} from './icons/icons.component'
import {Tabs} from './tabs/tabs.component'
import {Notifications} from './notifications/notifications.component'
import {Accordion} from './accordion/accordion.component'
import { TabsModule, AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {path: '', redirectTo: 'buttons', pathMatch: 'full'},
  {path: 'buttons', component: Buttons},
  {path: 'dialogs', component: Dialogs},
  {path: 'icons', component: Icons},
  {path: 'tabs', component: Tabs},
  {path: 'notifications', component: Notifications},
  {path: 'accordion', component: Accordion},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Buttons,
    Dialogs,
    Icons,
    Tabs,
    Accordion,
    Notifications
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    TabsModule, AccordionModule
  ]
})
export default class StatisticsModule {
  static routes = routes;
}
