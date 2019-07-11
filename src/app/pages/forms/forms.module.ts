import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Select2Module } from 'ng2-select2';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { AlertModule, TooltipModule } from 'ngx-bootstrap';
import { Autosize } from 'ng-autosize';
import { TagInputModule } from 'ngx-chips';

import { Account } from './account/account.component';
import { Article } from './article/article.component';
import { Elements } from './elements/elements.component';
import { Validation } from './validation/validation.component';
import { Wizard } from './wizard/wizard.component';
import { FormWizard } from './wizard/form-wizard/form-wizard.directive';
import { WidgetModule } from '../../layout/widget/widget.module';
import {
  DatetimeTransparent
} from '../ui/datetime-transparent/datetime-transparent.directive';
import {
  MarkdownToolbarTransparent
} from '../ui/markdown-toolbar-transparent/markdown-toolbar-transparent.directive';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


export const routes = [
  {path: '', redirectTo: 'account', pathMatch: 'full'},
  {path: 'account', component: Account},
  {path: 'article', component: Article},
  {path: 'elements', component: Elements},
  {path: 'validation', component: Validation},
  {path: 'wizard', component: Wizard}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Account,
    Article,
    Elements,
    Validation,
    Wizard,
    FormWizard,
    Autosize,
    DatetimeTransparent,
    MarkdownToolbarTransparent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Select2Module,
    NKDatetimeModule,
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    WidgetModule,
    TagInputModule,
    RouterModule.forChild(routes),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ]
})
export class FormModule {
  static routes = routes;
}
