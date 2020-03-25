import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap';

import { LoaderModule } from '../../components/loader/loader.module';
import { WidgsterComponent } from './widgster.component';
import { WidgsterTitleDirective } from './directives/widgster-title.directive';
import { WidgsterControlsDirective } from './directives/widgster-controls.directive';
import { WidgsterLoaderDirective } from './directives/widgster-loader.directive';

@NgModule({
  declarations: [
    WidgsterComponent,
    WidgsterTitleDirective,
    WidgsterControlsDirective,
    WidgsterLoaderDirective
  ],
  imports: [
    CommonModule,
    LoaderModule,
    TooltipModule.forRoot()
  ],
  exports: [
    WidgsterComponent,
    WidgsterTitleDirective,
    WidgsterControlsDirective,
    WidgsterLoaderDirective
  ]
})
export class WidgsterModule { }
