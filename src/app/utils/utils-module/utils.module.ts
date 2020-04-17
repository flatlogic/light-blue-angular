import { NgModule } from '@angular/core';

import { SanitizePipe } from './pipes/snitize.pipe';

@NgModule({
  declarations: [SanitizePipe],
  exports: [SanitizePipe]
})
export class UtilsModule { }
