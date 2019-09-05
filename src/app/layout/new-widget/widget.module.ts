import {NgModule} from '@angular/core';

import {WidgetComponent} from './widget';
import {TooltipModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LoaderModule} from '../../components/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule.forRoot(),
    LoaderModule
  ],
  exports: [WidgetComponent],
  declarations: [WidgetComponent]
})
export class NewWidgetModule {
}
