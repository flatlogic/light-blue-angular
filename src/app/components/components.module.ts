import 'fullcalendar/dist/fullcalendar.js';
import 'jquery-ui/ui/draggable.js';
import 'magnific-popup/dist/jquery.magnific-popup.min.js';
import 'shufflejs/dist/shuffle.js';
import 'moment/moment.js';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Calendar } from './calendar/calendar.component'
import { Maps } from './maps/maps.component'
import { Gallery } from './gallery/gallery.component'
import { Fileupload } from './fileupload/fileupload.component'

import { AgmCoreModule } from 'angular2-google-maps/core';
import { JqvmapModule } from './maps/jvmap/jqvmap.module';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

export const routes = [
  {path: '', redirectTo: 'calendar', pathMatch: 'full'},
  {path: 'calendar', component: Calendar},
  {path: 'maps', component: Maps},
  {path: 'gallery', component: Gallery},
  {path: 'fileupload', component: Fileupload}

];

@NgModule({
  declarations: [
    Calendar,
    Maps,
    Gallery,
    Fileupload
  ],
  imports: [
    CommonModule,
    FormsModule,
    JqvmapModule,
    ModalModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE',
      libraries: ['places']
    }),
    RouterModule.forChild(routes),
  ]
})
export default class MapsModule {
  static routes = routes;
}
