import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SortablejsModule } from '@dustfoundation/ngx-sortablejs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { GridComponent } from './grid.component';
import { WidgsterModule } from '../../components/widgster/widgster.module';
import { LoaderModule } from '../../components/loader/loader.module';

export const routes: Routes = [
  { path: '', component: GridComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgsterModule,
    LoaderModule,
    SortablejsModule,
    BsDropdownModule,
    TooltipModule
  ],
  declarations: [GridComponent]
})
export class GridModule { }
