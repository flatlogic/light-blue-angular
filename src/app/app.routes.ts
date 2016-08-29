import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

// AngularClass
// import { provideWebpack } from '@angularclass/webpack-toolkit';
// import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  {
    path: 'detail', loadChildren: () => require('es6-promise-loader!./+detail')('default')
  },
  { path: '**',    component: NoContent },
];
