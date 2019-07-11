import { NgModule }      from '@angular/core';

import { Nvd3Chart } from './nvd3.directive';

@NgModule({
  declarations: [
    Nvd3Chart
  ],
  exports: [
    Nvd3Chart
  ]
})
export class Nvd3ChartModule {
}
