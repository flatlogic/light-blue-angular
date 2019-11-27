import 'jquery.animate-number/jquery.animateNumber.js';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BigStatComponent } from './analytics/components/big-stat/big-stat.component';
import { WidgetModule } from '../../layout/widget/widget.module';
import { BsDropdownModule, ProgressbarModule } from 'ngx-bootstrap';
import { TrendModule } from 'ngx-trend';
import { TaskContainerComponent } from './analytics/components/task-container/task-container.component';
import { TaskComponent } from './analytics/components/task/task';
import { CalendarModule } from './visits/calendar/calendar.module';
import { VisitsComponent } from './visits/visits.component';
import { UtilsModule } from '../../layout/utils/utils.module';
import { MarketStatsWidgetComponent } from './visits/market-stats-widget/market-stats-widget.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { LiveTileModule } from '../../components/tile/tile.module';
import { SkyconsModule } from '../../components/skycon/skycon.module';
import { ChangesChartWidgetComponent } from './widgets/changes-chart-widget/changes-chart-widget.component';
import { NasdaqWidgetComponent } from './widgets/nasdaq-widget/nasdaq-widget.component';
import { RealtimeTrafficWidgetComponent } from './widgets/realtime-traffic-widget/realtime-traffic-widget.component';
import { YearsMapWidgetComponent } from './widgets/years-map-widget/years-map-widget.component';
import { FakeWorldData } from './widgets/years-map-widget/fake-world-data.service';
import { AnalyticsService } from './analytics/analytics.service';
import { NewWidgetModule } from '../../layout/new-widget/widget.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';

export const routes = [
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
    ChangesChartWidgetComponent,
    NasdaqWidgetComponent,
    RealtimeTrafficWidgetComponent,
    YearsMapWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetModule,
    ProgressbarModule.forRoot(),
    TrendModule,
    BsDropdownModule.forRoot(),
    CalendarModule,
    UtilsModule,
    LiveTileModule,
    WidgetModule,
    NewWidgetModule,
    SkyconsModule,
    NgApexchartsModule,
    NgxEchartsModule
  ],
  providers: [FakeWorldData, AnalyticsService]
})
export class MainModule {
  static routes = routes;
}
