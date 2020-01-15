import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2TableModule } from 'ng2-table';
import { WidgetModule } from '../../layout/widget/widget.module';
import { TablesBasicComponent } from './basic/tables-basic.component';
import { TablesDynamicComponent } from './dynamic/tables-dynamic.component';
import { SearchPipe } from './dynamic/pipes/search-pipe';
import { NgxEchartsModule } from 'ngx-echarts';

export const routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: 'basic', component: TablesBasicComponent },
  { path: 'dynamic', component: TablesDynamicComponent },
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    TablesBasicComponent,
    TablesDynamicComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule,
    WidgetModule,
    Ng2TableModule,
    NgxDatatableModule,
    RouterModule.forChild(routes),
    NgxEchartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TablesModule {
  static routes = routes;
}
