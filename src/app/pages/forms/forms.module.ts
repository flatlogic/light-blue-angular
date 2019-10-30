import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TooltipModule, AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { Autosize } from 'ng-autosize';
import { Select2Module } from 'ng2-select2';
import { WidgetModule } from '../../layout/widget/widget.module';
import { TextMaskModule } from 'angular2-text-mask';
/* tslint:disable */
import { BootstrapWizardModule } from '../../components/wizard/wizard.module';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
/* tslint:enable */
import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

export const routes = [
  {path: '', redirectTo: 'elements', pathMatch: 'full'},
  {path: 'elements', component: ElementsComponent},
  {path: 'validation', component: ValidationComponent},
  {path: 'wizard', component: WizardComponent}
];

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
    TextMaskModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    WidgetModule,
    BootstrapWizardModule,
    NKDatetimeModule,
    Select2Module,
    RouterModule.forChild(routes),
    EditorModule,
    DropzoneModule
  ]
})
export class FormModule {
  static routes = routes;
}
