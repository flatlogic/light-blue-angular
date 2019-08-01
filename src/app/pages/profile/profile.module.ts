import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

export const routes = [
  {path: '', component: ProfileComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileModule {
  static routes = routes;
}
