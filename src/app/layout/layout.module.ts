import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { ButtonsModule, DropdownModule } from 'ng2-bootstrap';

import { ROUTES } from './layout.routes';

import { Layout } from './layout.component';
import { Sidebar } from './sidebar/sidebar.component';
import { Navbar } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    ROUTES,
    DropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    FormsModule
  ],
  declarations: [Layout, Sidebar, Navbar]
})
export class LayoutModule {
}
