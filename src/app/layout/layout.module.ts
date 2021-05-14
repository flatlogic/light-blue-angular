import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ROUTES } from './layout.routes';
import { Layout } from './layout.component';
import { Sidebar } from './sidebar/sidebar.component';
import { Navbar } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    ROUTES,
    FormsModule,
    ButtonsModule,
    BsDropdownModule.forRoot(),
    AlertModule,
    ProgressbarModule,
    CollapseModule
  ],
  declarations: [Layout, Sidebar, Navbar]
})
export class LayoutModule { }
