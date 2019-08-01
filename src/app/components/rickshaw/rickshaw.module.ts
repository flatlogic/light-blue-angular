import { NgModule } from '@angular/core';
import { RickshawChartDirective } from './rickshaw.directive';

@NgModule({
  declarations: [
    RickshawChartDirective
  ],
  exports: [
    RickshawChartDirective
  ]
})
export class RickshawChartModule {
}
