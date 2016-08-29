import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';
import {Core} from './core';

// AngularClass
// import { provideWebpack } from '@angularclass/webpack-toolkit';
// import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


export const ROUTES: Routes = [
  { path: '',      component: Core }
];
