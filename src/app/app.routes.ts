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
      {path: 'dashboard', component: Dashboard}
  ]}
];
