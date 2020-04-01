import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { SortablejsModule } from 'ngx-sortablejs';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { IconsComponent } from './icons/icons.component';
import { TabsAccordionComponent } from './tabs-accordion/tabs-accordion.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { PopoversComponent } from './popovers/popovers';
import { ProgressComponent } from './progress/progress';
import { ModalComponent } from './modal/modal';
import { JumbotronComponent } from './jumbotron/jumbotron';
import { CarouselComponent } from './carousel/carousel';
import { CardComponent } from './card/card';
import { BadgeComponent } from './badge/badge';
import { AlertsComponent } from './alerts/alerts';
import { WidgsterModule } from '../../components/widgster/widgster.module';

export const routes = [
  { path: '', redirectTo: 'components', pathMatch: 'full' },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'tabs-accordion', component: TabsAccordionComponent },
  { path: 'list-groups', component: ListGroupsComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'card', component: CardComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'jumbotron', component: JumbotronComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'popovers', component: PopoversComponent },
  { path: 'progress', component: ProgressComponent },
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ButtonsComponent,
    NotificationsComponent,
    IconsComponent,
    TabsAccordionComponent,
    ListGroupsComponent,
    AlertsComponent,
    BadgeComponent,
    CardComponent,
    CarouselComponent,
    JumbotronComponent,
    ModalComponent,
    PopoversComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ToastrModule,
    WidgsterModule,
    SortablejsModule,
    AlertModule,
    TooltipModule,
    ModalModule,
    ButtonsModule,
    BsDropdownModule,
    TabsModule,
    AccordionModule,
    CarouselModule,
    PopoverModule,
    ProgressbarModule
  ]
})
export class UiElementsModule { }
