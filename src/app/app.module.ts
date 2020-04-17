import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ROUTES } from './app.routes';
import { CheckAllService } from './layout/utils/services/check-all.service';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginService } from './pages/login/login.service';
import { AppGuard } from './app.guard';
import { AppInterceptor } from './app.interceptor';
import { AppConfig } from './app.config';
import { CancelLaunchToastComponent } from './pages/ui-elements/notifications/toasts/cancel-launch/cancel-launch-toast.component';
import { RetryDestroyingToastComponent } from './pages/ui-elements/notifications/toasts/retry-destroying/retry-destroying-toast.component';
import { UtilsModule } from './utils/utils-module/utils.module';
import {SuccessToastComponent} from './pages/ui-elements/notifications/toasts/suceess/success-toast.component';

const APP_PROVIDERS = [
  CheckAllService,
  LoginService,
  AppGuard,
  AppConfig
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ErrorComponent,
    CancelLaunchToastComponent,
    SuccessToastComponent,
    RetryDestroyingToastComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    ProgressbarModule.forRoot(),
    CollapseModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    UtilsModule
  ],
  providers: [
    APP_PROVIDERS,
    {
      provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true
    }
  ]
})
export class AppModule { }
