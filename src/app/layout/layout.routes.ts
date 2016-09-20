import { Routes, RouterModule }  from '@angular/router';
import { Layout } from "./layout.component";
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => System.import('../dashboard/dashboard.module') },
    { path: 'form', loadChildren: () => System.import('../form') }
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
