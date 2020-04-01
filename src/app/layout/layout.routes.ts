import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';

const routes: Routes = [
  {
    path: '', component: Layout, children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', loadChildren: () => import('../pages/main/main.module').then(module => module.MainModule) },
      { path: 'inbox', loadChildren: () => import('../pages/inbox/inbox.module').then(module => module.InboxModule) },
      { path: 'charts', loadChildren: () => import('../pages/charts/charts.module').then(module => module.ChartsModule) },
      { path: 'profile', loadChildren: () => import('../pages/profile/profile.module').then(module => module.ProfileModule) },
      { path: 'ecommerce', loadChildren: () => import('../pages/ecommerce/ecommerce.module').then(module => module.EcommerceModule) },
      { path: 'core', loadChildren: () => import('../pages/core/core-elements.module').then(module => module.CoreElementsModule) },
      { path: 'forms', loadChildren: () => import('../pages/forms/forms.module').then(module => module.FormModule) },
      { path: 'ui', loadChildren: () => import('../pages/ui-elements/ui-elements.module').then(module => module.UiElementsModule) },
      { path: 'extra', loadChildren: () => import('../pages/extra/extra.module').then(module => module.ExtraModule) },
      { path: 'tables', loadChildren: () => import('../pages/tables/tables.module').then(module => module.TablesModule) },
      { path: 'maps', loadChildren: () => import('../pages/maps/maps.module').then(module => module.MapsModule) },
      { path: 'grid', loadChildren: () => import('../pages/grid/grid.module').then(module => module.GridModule) },
      { path: 'package', loadChildren: () => import('../pages/package/package.module').then(module => module.PackageModule) }
    ]
  }
];

export const ROUTES = RouterModule.forChild(routes);
