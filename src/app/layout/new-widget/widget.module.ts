import {NgModule} from '@angular/core';

import {WidgetComponent} from './widget';
import {TooltipModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  exports: [WidgetComponent],
  declarations: [WidgetComponent]
})
export class NewWidgetModule {
}
