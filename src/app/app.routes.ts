import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';
import {Core} from './core';
import {Dashboard} from './dashboard';

// AngularClass
// import { provideWebpack } from '@angularclass/webpack-toolkit';
// import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


export const ROUTES: Routes = [
  { path: '', component: Core,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: Dashboard},
      {path: 'form', loadChildren: () => System.import('./form')},
      {path: 'statistics', loadChildren: () => System.import('./statistics')},
      {path: 'ui', loadChildren: () => System.import('./ui')},
      {path: 'components', loadChildren: () => System.import('./components')},
      {path: 'tables', loadChildren: () => System.import('./tables')},
      {path: 'widgets', loadChildren: () => System.import('./widgets')},
      {path: 'special', loadChildren: () => System.import('./special')},
  ]}
];
