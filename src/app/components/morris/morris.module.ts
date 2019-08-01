import { NgModule } from '@angular/core';
import { MorrisChartDirective } from './morris.directive';

@NgModule({
  declarations: [
    MorrisChartDirective
  ],
  exports: [
    MorrisChartDirective
  ]
})
export class MorrisChartModule {
}
