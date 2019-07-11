import { NgModule }      from '@angular/core';

import { FlotChart } from './flot.directive';

@NgModule({
  declarations: [
    FlotChart
  ],
  exports: [
    FlotChart
  ]
})
export class FlotChartModule {
}
