import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule, TooltipModule } from 'ngx-bootstrap';
import { ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';

import { AgmCoreModule } from '@agm/core';

import { MapsGoogleComponent } from './google/maps-google.component';
import { MapsVectorComponent } from './vector/maps-vector.component';
import { NewWidgetModule } from '../../layout/new-widget/widget.module';
import { YearsMapModule } from '../../components/years-map-widget/year-map.module';
import { WidgsterModule } from '../../components/widgster/widgster.module';

export const routes = [
  { path: '', redirectTo: 'google', pathMatch: 'full' },
  { path: 'google', component: MapsGoogleComponent },
  { path: 'vector', component: MapsVectorComponent }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    MapsGoogleComponent,
    MapsVectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg'
    }),
    NewWidgetModule,
    YearsMapModule,
    WidgsterModule
  ]
})
export class MapsModule {
  static routes = routes;
}
