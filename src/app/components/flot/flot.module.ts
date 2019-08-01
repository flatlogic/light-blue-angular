import { NgModule } from '@angular/core';
import { FlotChartDirective } from './flot.directive';

@NgModule({
  declarations: [
    FlotChartDirective
  ],
  exports: [
    FlotChartDirective
  ]
})
export class FlotChartModule {
}
