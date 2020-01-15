import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProgressAnimateDirective } from './directives/progress-animate.directive';

@NgModule({
  declarations: [
    ProgressAnimateDirective
  ],
  exports: [
    ProgressAnimateDirective
  ],
  imports: [
    CommonModule
  ]
})
export class UtilsModule {
}
