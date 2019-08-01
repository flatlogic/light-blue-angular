import { NgModule } from '@angular/core';
import { LiveTileDirective } from './tile.directive';

import 'metrojs/release/MetroJs.Full/MetroJs';

@NgModule({
  declarations: [
    LiveTileDirective
  ],
  exports: [
    LiveTileDirective
  ]
})
export class LiveTileModule {
}
