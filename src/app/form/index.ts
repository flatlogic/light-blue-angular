import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {Account} from './account'
import {Article} from './article'
import {Elements} from './elements'
import {Validation} from './validation'
import {Wizard} from './wizard'

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
    Wizard
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class FormModule {
  static routes = routes;
}
