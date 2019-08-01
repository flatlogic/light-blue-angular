import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GridComponent } from './grid.component';
import { GridDemoDirective } from './grid-demo/grid-demo';
import {WidgetModule} from '../../layout/widget/widget.module';

export const routes = [
  { path: '', component: GridComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes), WidgetModule ],
  declarations: [ GridComponent, GridDemoDirective ]
})
export class GridModule {
  static routes = routes;
}
