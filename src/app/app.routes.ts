import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { AppGuard } from './app.guard';

export const ROUTES: Routes = [{
  path: '', redirectTo: 'app', pathMatch: 'full'
},
{
  path: 'app', canActivate: [AppGuard], loadChildren: () => import('./layout/layout.module').then(module => module.LayoutModule)
},
{
  path: 'login', loadChildren: () => import('./pages/login/login.module').then(module => module.LoginModule)
},
{
  path: 'register', loadChildren: () => import('./pages/register/register.module').then(module => module.RegisterModule)
},
{
  path: 'error', component: ErrorComponent
},
{
  path: '**', component: ErrorComponent
}
];
