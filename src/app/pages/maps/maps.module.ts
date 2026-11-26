import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapModule } from '../../components/google-map/google-map.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { MapsGoogleComponent } from './google/maps-google.component';
import { MapsVectorComponent } from './vector/maps-vector.component';
import { YearsMapModule } from '../../components/years-map-widget/year-map.module';
import { WidgsterModule } from '../../components/widgster/widgster.module';

export const routes: Routes = [
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
    GoogleMapModule.forRoot({
      apiKey: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg'
    }),
    YearsMapModule,
    WidgsterModule,
    AlertModule,
    TooltipModule,
    ButtonsModule,
    BsDropdownModule
  ]
})
export class MapsModule { }
