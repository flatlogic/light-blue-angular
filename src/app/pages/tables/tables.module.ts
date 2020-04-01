import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { Ng2TableModule } from 'ng2-table';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { TablesBasicComponent } from './basic/tables-basic.component';
import { TablesDynamicComponent } from './dynamic/tables-dynamic.component';
import { SearchPipe } from './dynamic/pipes/search-pipe';
import { NgxEchartsModule } from 'ngx-echarts';
import { WidgsterModule } from '../../components/widgster/widgster.module';

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
    // Ng2TableModule,
    NgxDatatableModule,
    RouterModule.forChild(routes),
    NgxEchartsModule,
    WidgsterModule,
    AlertModule,
    TooltipModule,
    ButtonsModule,
    BsDropdownModule,
    PaginationModule,
    ProgressbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TablesModule { }
