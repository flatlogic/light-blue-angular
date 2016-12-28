import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Select2Module } from 'ng2-select2';
import { Autosize } from 'angular2-autosize';
import 'bootstrap-select/dist/js/bootstrap-select.js';
import 'parsleyjs';
import 'twitter-bootstrap-wizard/jquery.bootstrap.wizard.js';

import {Account} from './account/account.component'
import {Article} from './article/article.component'
import {Elements} from './elements/elements.component'
import {Validation} from './validation/validation.component'
import {Wizard} from './wizard/wizard.component'
import {FormWizard} from './wizard/form-wizard/form-wizard.directive';
import {WidgetModule} from '../layout/widget/widget.module';


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
    Autosize
  ],
  imports: [
    CommonModule,
    FormsModule,
    Select2Module,
    WidgetModule,
    RouterModule.forChild(routes),
  ]
})
export default class FormModule {
  static routes = routes;
}
