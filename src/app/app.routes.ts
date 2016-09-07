import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';
import {Core} from './core';
import {Dashboard} from './dashboard';
import {Account} from './form/account'
import {Article} from './form/article'
import {Elements} from './form/elements'
import {Validation} from './form/validation'
import {Wizard} from './form/wizard'

// AngularClass
// import { provideWebpack } from '@angularclass/webpack-toolkit';
// import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


export const ROUTES: Routes = [
  { path: '', component: Core,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: Dashboard},
      {path: 'form',
        children: [
          {path: '', redirectTo: 'account', pathMatch: 'full'},
          {path: 'account', component: Account},
          {path: 'article', component: Article},
          {path: 'elements', component: Elements},
          {path: 'validation', component: Validation},
          {path: 'wizard', component: Wizard}
        ]}
  ]}
];
