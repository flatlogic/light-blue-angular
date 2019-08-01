import { NgModule } from '@angular/core';
import { JqSparklineDirective } from './sparkline.directive';

@NgModule({
  declarations: [
    JqSparklineDirective
  ],
  exports: [
    JqSparklineDirective
  ]
})
export class JqSparklineModule {
}
