import { NgModule }      from '@angular/core';

import { RickshawChart } from './rickshaw.directive';

@NgModule({
  declarations: [
    RickshawChart
  ],
  exports: [
    RickshawChart
  ]
})
export class RickshawChartModule {
}
