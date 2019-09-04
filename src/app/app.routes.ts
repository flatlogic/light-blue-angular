import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import {AppGuard} from "./app.guard";

export const ROUTES: Routes = [{
   path: '', redirectTo: 'app', pathMatch: 'full'
  },
  {
    path: 'app', canActivate: [AppGuard],  loadChildren: './layout/layout.module#LayoutModule'
  },
  {
    path: 'login', loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'register', loadChildren: './pages/register/register.module#RegisterModule'
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];
