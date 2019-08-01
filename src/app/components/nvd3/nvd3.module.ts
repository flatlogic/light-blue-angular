import { NgModule } from '@angular/core';
import { Nvd3ChartDirective } from './nvd3.directive';

@NgModule({
  declarations: [
    Nvd3ChartDirective
  ],
  exports: [
    Nvd3ChartDirective
  ]
})
export class Nvd3ChartModule {
}
