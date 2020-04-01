import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Autosize } from 'ng-autosize';
import { TextMaskModule } from 'angular2-text-mask';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { NgSelectModule } from '@ng-select/ng-select';
import { ColorPickerModule } from 'ngx-color-picker';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { Ng5SliderModule } from 'ng5-slider';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

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
    RouterModule.forChild(routes),
    EditorModule,
    DropzoneModule,
    NgWizardModule.forRoot(wizardConfig),
    NgSelectModule,
    ColorPickerModule,
    LMarkdownEditorModule,
    Ng5SliderModule,
    WidgsterModule,
    TooltipModule,
    AlertModule,
    BsDropdownModule,
    DatepickerModule,
    TimepickerModule
  ]
})
export class FormModule { }
