import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProgressAnimateDirective } from './directives/progress-animate.directive';
import { AnimateNumberDirective } from './directives/animate-number.directive';

@NgModule({
  declarations: [
    ProgressAnimateDirective,
    AnimateNumberDirective
  ],
  exports: [
    ProgressAnimateDirective,
    AnimateNumberDirective
  ],
  imports: [
    CommonModule
  ]
})
export class UtilsModule {
}
