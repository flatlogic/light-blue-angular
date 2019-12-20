import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TooltipModule, AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { Autosize } from 'ng-autosize';
import { WidgetModule } from '../../layout/widget/widget.module';
import { TextMaskModule } from 'angular2-text-mask';
import { NKDatetimeModule } from 'ngx-datetime';
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { NgSelectModule } from '@ng-select/ng-select';

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
    WidgetModule,
    NKDatetimeModule,
    RouterModule.forChild(routes),
    EditorModule,
    DropzoneModule,
    NgWizardModule.forRoot(wizardConfig),
    NgSelectModule
  ]
})
export class FormModule {
  static routes = routes;
}
