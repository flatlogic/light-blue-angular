import { NgModule }      from '@angular/core';

import { MorrisChart } from './morris.directive';

@NgModule({
  declarations: [
    MorrisChart
  ],
  exports: [
    MorrisChart
  ]
})
export class MorrisChartModule {
}
