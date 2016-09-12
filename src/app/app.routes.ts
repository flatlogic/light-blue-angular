import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';
import {Core} from './core';
import {Dashboard} from './dashboard';
import {Account} from './form/account'
import {Article} from './form/article'
import {Elements} from './form/elements'
import {Validation} from './form/validation'
import {Wizard} from './form/wizard'
import {Stats} from './statistics/stats'
import {Charts} from './statistics/charts'
import {Realtime} from './statistics/realtime'
import {Buttons} from './ui/buttons'
import {Dialogs} from './ui/dialogs'
import {Icons} from './ui/icons'
import {Tabs} from './ui/tabs'
import {Accordion} from './ui/accordion'
import {Calendar} from './components/calendar'
import {Maps} from './components/maps'
import {Gallery} from './components/gallery'
import {Fileupload} from './components/fileupload'
import {Dynamic} from './tables/dynamic'
import {Static} from './tables/static'
import {Basic} from './widgets/basic'
import {Live} from './widgets/live'
import {Search} from './special/search'
import {Invoice} from './special/invoice'
import {Inbox} from './special/inbox'

// AngularClass
// import { provideWebpack } from '@angularclass/webpack-toolkit';
// import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


export const ROUTES: Routes = [
  { path: '', component: Core,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: Dashboard},
      {path: 'form',
        children: [
          {path: '', redirectTo: 'account', pathMatch: 'full'},
          {path: 'account', component: Account},
          {path: 'article', component: Article},
          {path: 'elements', component: Elements},
          {path: 'validation', component: Validation},
          {path: 'wizard', component: Wizard}
        ]},
      {path: 'statistics',
        children: [
          {path: '', redirectTo: 'stats', pathMatch: 'full'},
          {path: 'stats', component: Stats},
          {path: 'charts', component: Charts},
          {path: 'realtime', component: Realtime},
        ]},
      {path: 'ui',
        children: [
          {path: '', redirectTo: 'buttons', pathMatch: 'full'},
          {path: 'buttons', component: Buttons},
          {path: 'dialogs', component: Dialogs},
          {path: 'icons', component: Icons},
          {path: 'tabs', component: Tabs},
          {path: 'accordion', component: Accordion},
        ]},
      {path: 'components',
        children: [
          {path: '', redirectTo: 'calendar', pathMatch: 'full'},
          {path: 'calendar', component: Calendar},
          {path: 'maps', component: Maps},
          {path: 'gallery', component: Gallery},
          {path: 'fileupload', component: Fileupload}
        ]},
      {path: 'tables',
        children: [
          {path: '', redirectTo: 'static', pathMatch: 'full'},
          {path: 'static', component: Static},
          {path: 'dynamic', component: Dynamic}
        ]},
      {path: 'widgets',
        children: [
          {path: '', redirectTo: 'basic', pathMatch: 'full'},
          {path: 'basic', component: Basic},
          {path: 'live', component: Live}
        ]},
      {path: 'special',
        children: [
          {path: '', redirectTo: 'search', pathMatch: 'full'},
          {path: 'search', component: Search},
          {path: 'invoice', component: Invoice},
          {path: 'inbox', component: Inbox}
        ]}
  ]}
];
