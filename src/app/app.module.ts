import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InteralStateType } from './app.service';

import {Core} from './core'
import {Dashboard} from './dashboard'
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

import {Sidebar} from './core/sidebar'
import {Navbar} from './core/navbar'

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InteralStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    Core,
    Dashboard,
    Calendar,
    Maps,
    Gallery,
    Fileupload,
    Dynamic,
    Static,
    Basic,
    Live,
    Search,
    Invoice,
    Inbox,
    Charts,
    Realtime,
    Buttons,
    Dialogs,
    Icons,
    Tabs,
    Accordion,
    Account,
    Article,
    Elements,
    Validation,
    Wizard,
    Stats,
    Sidebar,
    Navbar
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

