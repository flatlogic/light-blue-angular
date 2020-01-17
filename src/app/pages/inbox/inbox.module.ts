import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InboxComponent } from './inbox.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailFormComponent } from './mail-form/mail-form.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';
import { SearchPipe } from './mail-list/pipes/search-pipe';
import { FoldersPipe } from './mail-list/pipes/folders-pipe';

export const routes = [
    { path: '', component: InboxComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes) ],
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
