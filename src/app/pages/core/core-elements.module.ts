import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TypographyComponent } from './typography/typography.component';
import { ColorsComponent } from './colors/colors.component';
import { GridComponent } from './grid/grid.component';
import { WidgsterModule } from '../../components/widgster/widgster.module';

export const routes = [
  { path: '', redirectTo: 'typography', pathMatch: 'full' },
  { path: 'typography', component: TypographyComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'grid', component: GridComponent },
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    TypographyComponent,
    ColorsComponent,
    GridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    WidgsterModule
  ]
})
export class CoreElementsModule { }
