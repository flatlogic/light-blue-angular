import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Autosize } from 'ng-autosize';
import { TextMaskModule } from 'angular2-text-mask';
import { NKDatetimeModule } from 'ngx-datetime';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { NgSelectModule } from '@ng-select/ng-select';
import { ColorPickerModule } from 'ngx-color-picker';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { Ng5SliderModule } from 'ng5-slider';

import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { WizardComponent } from './wizard/wizard.component';
import { WidgsterModule } from '../../components/widgster/widgster.module';

export const routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' },
  { path: 'elements', component: ElementsComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'wizard', component: WizardComponent }
];

const wizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    Autosize,
    ElementsComponent,
    ValidationComponent,
    WizardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    NKDatetimeModule,
    RouterModule.forChild(routes),
    EditorModule,
    DropzoneModule,
    NgWizardModule.forRoot(wizardConfig),
    NgSelectModule,
    ColorPickerModule,
    LMarkdownEditorModule,
    Ng5SliderModule,
    WidgsterModule
  ]
})
export class FormModule {
}
