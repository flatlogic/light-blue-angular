import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: '../pages/analytics/analytics.module#AnalyticsModule' },
      {path: 'another', loadChildren: '../pages/another/another.module#AnotherModule'},
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
