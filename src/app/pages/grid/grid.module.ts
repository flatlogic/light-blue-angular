import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SortablejsModule } from 'ngx-sortablejs';

import { GridComponent } from './grid.component';
import { WidgsterModule } from '../../components/widgster/widgster.module';
import { LoaderModule } from '../../components/loader/loader.module';
import { UtilsModule } from '../../utils/utils-module/utils.module';

export const routes = [
  { path: '', component: GridComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgsterModule,
    LoaderModule,
    BsDropdownModule,
    UtilsModule,
    SortablejsModule
  ],
  declarations: [GridComponent]
})
export class GridModule { }
