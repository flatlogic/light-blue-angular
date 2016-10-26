import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Select2Module } from 'ng2-select2';
import 'bootstrap-select/dist/js/bootstrap-select.js';

import { OffClickDirective } from 'ng2-select/components/select/off-click';
import { HighlightPipe } from 'ng2-select/components/select/select-pipes';

import {Account} from './account/account.component'
import {Article} from './article/article.component'
import {Elements} from './elements/elements.component'
import {Validation} from './validation/validation.component'
import {Wizard} from './wizard/wizard.component'

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
    OffClickDirective,
    HighlightPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    Select2Module,
    RouterModule.forChild(routes),
  ]
})
export default class FormModule {
  static routes = routes;
}
