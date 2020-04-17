import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { InboxComponent } from './inbox.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailFormComponent } from './mail-form/mail-form.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';
import { SearchPipe } from './mail-list/pipes/search-pipe';
import { FoldersPipe } from './mail-list/pipes/folders-pipe';
import { UtilsModule } from '../../utils/utils-module/utils.module';

export const routes = [
  { path: '', component: InboxComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    BsDropdownModule,
    UtilsModule
  ],
  declarations: [
    InboxComponent,
    MailListComponent,
    MailFormComponent,
    MailDetailComponent,
    FoldersPipe,
    SearchPipe
  ]
})
export class InboxModule {
  static routes = routes;
}
