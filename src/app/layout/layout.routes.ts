import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', loadChildren: '../pages/main/main.module#MainModule' },
      {path: 'inbox', loadChildren: '../pages/inbox/inbox.module#InboxModule'},
      {path: 'charts', loadChildren: '../pages/charts/charts.module#ChartsModule'},
      {path: 'profile', loadChildren: '../pages/profile/profile.module#ProfileModule'},
      {path: 'ecommerce', loadChildren: '../pages/ecommerce/ecommerce.module#EcommerceModule'},
      {path: 'core', loadChildren: '../pages/core/core-elements.module#CoreElementsModule'},
      {path: 'forms', loadChildren: '../pages/forms/forms.module#FormModule'},
      {path: 'ui', loadChildren: '../pages/ui-elements/ui-elements.module#UiElementsModule'},
      {path: 'extra', loadChildren: '../pages/extra/extra.module#ExtraModule'},
      {path: 'tables', loadChildren: '../pages/tables/tables.module#TablesModule'},
      {path: 'maps', loadChildren: '../pages/maps/maps.module#MapsModule'},
      {path: 'grid', loadChildren: '../pages/grid/grid.module#GridModule'},
      {path: 'package', loadChildren: '../pages/package/package.module#PackageModule'}
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
