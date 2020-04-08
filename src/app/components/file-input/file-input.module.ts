import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileInputComponent } from './file-input.component';
import { FileInputLabelDirective } from './directives/file-input-label.directive';
import { FileInputHintDirective } from './directives/file-input-hint.directive';
import { FileInputDirective } from './directives/file-input.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FileInputComponent,
    FileInputLabelDirective,
    FileInputHintDirective,
    FileInputDirective
  ],
  exports: [
    FileInputComponent,
    FileInputLabelDirective,
    FileInputHintDirective,
    FileInputDirective
  ]
})
export class FileInputModule { }

