import { NgModule } from '@angular/core';
import { MapaelLayersMapDirective } from './mapael.directive';

@NgModule({
  declarations: [
    MapaelLayersMapDirective
  ],
  exports: [
    MapaelLayersMapDirective
  ]
})
export class MapaelLayersMapModule {
}
