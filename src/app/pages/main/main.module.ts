import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrendModule } from 'ngx-trend';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { WidgetSwiperComponent } from './widgets/widget-swiper.component';
import { CountUpDirective } from 'ngx-countup';
import { CalendarModule as AngularCalendarModule, DateAdapter, CalendarDateFormatter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AnalyticsComponent } from './analytics/analytics.component';
import { BigStatComponent } from './analytics/components/big-stat/big-stat.component';
import { TaskContainerComponent } from './analytics/components/task-container/task-container.component';
import { TaskComponent } from './analytics/components/task/task';
import { VisitsComponent } from './visits/visits.component';
import { MarketStatsWidgetComponent } from './visits/market-stats-widget/market-stats-widget.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { SkyconsModule } from '../../components/skycon/skycon.module';
import { ChangesChartWidgetComponent } from './widgets/changes-chart-widget/changes-chart-widget.component';
import { NasdaqWidgetComponent } from './widgets/nasdaq-widget/nasdaq-widget.component';
import { RealtimeTrafficWidgetComponent } from './widgets/realtime-traffic-widget/realtime-traffic-widget.component';
import { AnalyticsService } from './analytics/analytics.service';
import { YearsMapModule } from '../../components/years-map-widget/year-map.module';
import { CustomDateFormatter } from './visits/custom-date-formatter.service';
import { WidgsterModule } from '../../components/widgster/widgster.module';

export const routes: Routes = [
  { path: '', redirectTo: 'visits', pathMatch: 'full' },
  { path: 'analytics', component: AnalyticsComponent, pathMatch: 'full' },
  { path: 'visits', component: VisitsComponent, pathMatch: 'full' },
  { path: 'widgets', component: WidgetsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AnalyticsComponent,
    BigStatComponent,
    TaskContainerComponent,
    TaskComponent,
    VisitsComponent,
    MarketStatsWidgetComponent,
    WidgetsComponent,
    WidgetSwiperComponent,
    ChangesChartWidgetComponent,
    NasdaqWidgetComponent,
    RealtimeTrafficWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TrendModule,
    SkyconsModule,
    NgApexchartsModule,
    NgxEchartsModule,
    YearsMapModule,
    CountUpDirective,
    AngularCalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    WidgsterModule,
    ProgressbarModule,
    BsDropdownModule,
  ],
  providers: [
    AnalyticsService,
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class MainModule { }
