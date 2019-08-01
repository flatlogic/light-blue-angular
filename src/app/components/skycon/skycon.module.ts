import { NgModule } from '@angular/core';
import { SkyconDirective } from './scycon.directive';

@NgModule({
  declarations: [
    SkyconDirective
  ],
  exports: [
    SkyconDirective
  ]
})
export class SkyconsModule {
}
