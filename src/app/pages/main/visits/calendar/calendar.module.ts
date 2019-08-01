import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import 'bootstrap_calendar/bootstrap_calendar/js/bootstrap_calendar.js';
import {CalendarComponent} from './calendar';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CalendarComponent
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule {}
