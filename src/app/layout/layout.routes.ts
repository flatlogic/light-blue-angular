import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: '../pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'forms', loadChildren: '../pages/forms/forms.module#FormModule' },
      { path: 'statistics', loadChildren: '../pages/statistics/statistics.module#StatisticsModule' },
      { path: 'ui', loadChildren: '../pages/ui/ui.module#UiModule' },
      { path: 'components', loadChildren: '../pages/components/components.module#ComponentsModule' },
      { path: 'tables', loadChildren: '../pages/tables/tables.module#TablesModule' },
      { path: 'widgets', loadChildren: '../pages/widgets/widgets.module#WidgetsModule' },
      { path: 'special', loadChildren: '../pages/special/special.module#SpecialModule' },
      { path: 'package', loadChildren: '../pages/package/package.module#PackageModule' },
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
