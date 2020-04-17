import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Mail } from './mail.interface';

const MAILS: Mail[] = [
  {
    id: 1,
    sender: 'Philip Horbacheuski',
    senderMail: 'philip.horbacheuski@example.com',
    subject: 'Hi, Welcome to Google Mail',
    date: '18:31',
    paperclip: true,
    attachment: true,
    unread: true,
    starred: true,
    folderId: 1,
    selected: false,
    attachments: ['assets/img/pictures/1.jpg', 'assets/img/pictures/2.jpg'],
    body: '<p>Projecting surrounded literature ' +
      'yet delightful alteration but bed men. Open are' +
      ' from long why cold. If must snug by upon sang ' +
      'loud left. As me do preference entreaties compliment ' +
      'motionless ye literature. Day behaviour explained law' +
      ' remainder.</p>    <p><strong>On then sake' +
      ' home</strong> is am leaf. Of suspicion do' +
      ' departure at extremely he believing. Do know ' +
      'said mind do rent they oh hope of. General enquire' +
      ' picture letters garrets on offices of no on.</p>' +
      ' <p>All the best,</p> <p>Vitaut the Great, CEO,' +
      ' <br>Fooby Inc.</p>',
    timestamp: 1376508566000
  },
  {
    id: 2,
    sender: 'StackExchange',
    subject: 'New Python questions for this week!',
    senderMail: '',
    date: 'Aug 14',
    paperclip: true,
    unread: true,
    starred: false,
    attachment: true,
    timestamp: 1376508566000,
    folderId: 1,
    selected: false,
    attachments: ['assets/img/pictures/3.jpg'],
    body: '<h1>THIS IS HTML!!!!</h1>'
  },
  {
    id: 3,
    sender: 'notifications@facebook.com',
    senderMail: 'notifications@facebook.com',
    subject: 'Someone just commented on your photo!',
    date: 'Aug 7',
    selected: false,
    unread: false,
    timestamp: 1375877213000,
    folderId: 1,
    attachment: false,
    attachments: [],
    body: '',
    paperclip: false,
    starred: false
  },
  {
    id: 4,
    sender: 'Twitter',
    subject: '@hackernews is now following you on Twitter',
    date: 'Jul 31',
    starred: true,
    unread: true,
    selected: false,
    timestamp: 1375261974000,
    folderId: 1,
    attachment: false,
    attachments: [],
    body: '',
    paperclip: false,
    senderMail: ''
  },
  {
    id: 5,
    sender: 'LinkedIn',
    subject: 'Jobs you may be interested in',
    date: 'May 12',
    selected: false,
    unread: false,
    timestamp: 1373634231000,
    folderId: 1,
    attachment: false,
    attachments: [],
    body: '',
    paperclip: false,
    senderMail: '',
    starred: false
  },
  {
    id: 6,
    sender: 'Naevius Victorsson',
    subject: 'Front no party young abode state up',
    date: 'May 1',
    starred: true,
    unread: false,
    selected: false,
    timestamp: 1373516566000,
    folderId: 1,
    attachment: false,
    attachments: [],
    body: '',
    paperclip: false,
    senderMail: ''
  },
  {
    id: 7,
    sender: 'Nikola Foley',
    subject: 'Quiet led own cause three him',
    date: 'Apr 23',
    paperclip: true,
    attachment: true,
    attachments: ['assets/img/pictures/5.jpg', 'assets/img/pictures/4.jpg'],
    unread: false,
    selected: false,
    timestamp: 1374508566000,
    folderId: 1,
    body: '',
    senderMail: '',
    starred: false
  },
  {
    id: 8,
    sender: 'Ernst Hardy',
    subject: 'Raising say express had chiefly detract demands she',
    date: 'Apr 20',
    selected: false,
    unread: false,
    timestamp: 1373877213000,
    folderId: 1,
    attachment: false,
    attachments: [],
    body: '',
    paperclip: false,
    senderMail: '',
    starred: false
  },
  {
    id: 9,
    sender: 'Lubbert Fuller',
    subject: 'Civility vicinity graceful is it at',
    date: 'Jul 3',
    starred: true,
    selected: false,
    unread: false,
    timestamp: 1376516566000,
    folderId: 2,
    attachment: false,
    attachments: [],
    body: '',
    paperclip: false,
    senderMail: ''
  },
  {
    id: 10,
    sender: 'Tatenda Guerra',
    subject: 'Improve up at to on mention perhaps raising',
    date: 'Jul 13',
    attachment: true,
    attachments: ['assets/img/pictures/6.jpg'],
    selected: false,
    unread: false,
    timestamp: 1376508566000,
    folderId: 3,
    body: '',
    paperclip: false,
    senderMail: '',
    starred: false
  },
  {
    id: 12,
    sender: 'Ladislao Roche',
    subject: 'Way building not get formerly her peculiar',
    date: 'Jul 18',
    selected: false,
    unread: true,
    timestamp: 1375877213000,
    folderId: 2,
    attachment: false,
    attachments: [],
    body: '',
    paperclip: false,
    senderMail: '',
    starred: false
  },
  {
    id: 13,
    sender: 'Areli.Tanzi@gmail.com',
    senderMail: 'Areli.Tanzi@gmail.com',
    subject: 'Up uncommonly prosperous sentiments simplicity',
    date: 'Jul 24',
    starred: true,
    attachment: true,
    attachments: ['assets/img/pictures/9.jpg'],
    selected: false,
    unread: false,
    timestamp: 1375261974000,
    folderId: 2,
    body: '',
    paperclip: false
  },
  {
    id: 14,
    sender: 'Oluwaseyi Tremble',
    subject: 'Reasonable appearance companions oh',
    date: 'Jul 28',
    selected: false,
    unread: false,
    timestamp: 1373634231000,
    folderId: 3,
    attachment: false,
    attachments: [],
    body: '',
    paperclip: false,
    senderMail: '',
    starred: false
  }
];

@Component({
  selector: '[mail-list]',
  templateUrl: './mail-list.template.html',
  styleUrls: ['./mail-list.style.scss']
})

export class MailListComponent implements OnInit, OnDestroy {
  @Output() public replyMail = new EventEmitter();
  @Input() folderName: any;
  public mails: Mail[] = [...MAILS];
  public searchText: string = '';
  public checkAll: FormControl = new FormControl(false);

  private destroySource: Subject<boolean> = new Subject();

  public ngOnInit(): void {
    this.checkAll.valueChanges.pipe(takeUntil(this.destroySource)).subscribe((checkAll: boolean) => {
      this.onCheckAllChange(checkAll);
    });
  }

  public ngOnDestroy(): void {
    this.destroySource.next(true);
    this.destroySource.complete();
  }

  public onCheckAllChange(checkAll: boolean): void {
    this.mails = this.mails.map((m: Mail) => ({
      ...m,
      selected: checkAll
    }));
  }

  public onSelect(mailId: number): void {
    this.mails = this.mails.map((m: Mail) => ({
      ...m,
      selected: m.id === mailId ? !m.selected : m.selected
    }));

    if (this.mails.length === this.mails.filter((m: Mail) => m.selected).length) {
      this.checkAll.setValue(true, { emitEvent: false });
    }
  }

  public changeStarStatus(mail: Mail): void {
    this.mails = this.mails.map((m: Mail) => ({
      ...m,
      starred: m.id === mail.id ? !m.starred : m.starred
    }));
  }

  public selectAll(): void {
    this.mails = this.mails.map((m: Mail) => ({
      ...m,
      selected: true
    }));
    this.checkAll.setValue(true, { emitEvent: false });
  }

  public unselectAll(): void {
    this.mails = this.mails.map((m: Mail) => ({
      ...m,
      selected: false
    }));
    this.checkAll.setValue(false, { emitEvent: false });
  }

  public selectRead(): void {
    this.mails = this.mails.map((m: Mail) => ({
      ...m,
      selected: !m.unread
    }));
  }

  public selectUnread(): void {
    this.mails = this.mails.map((m: Mail) => ({
      ...m,
      selected: m.unread
    }));
  }

  public markSelectedAsRead(): void {
    this.mails = this.mails.map((m: Mail) => ({
      ...m,
      unread: m.selected ? false : m.unread
    }));
  }

  public deleteEmails(): void {
    this.mails = this.mails.filter((m: Mail) => !m.selected);
    this.checkAll.setValue(false, { emitEvent: false });
  }

  public markSelectedAsUnread(): void {
    this.mails = this.mails.map((m: Mail) => ({
      ...m,
      unread: m.selected ? true : m.unread
    }));
  }

  public openMail(mail: Mail): void {
    this.mails = this.mails.map((m: Mail) => ({
      ...m,
      unread: m.id === mail.id ? false : m.unread
    }));
    this.replyMail.emit(mail);
  }

  public selectMail(mail: Mail): void {
    this.mails = this.mails.map((m: Mail) => ({
      ...m,
      selected: m.id === mail.id ? !m.selected : m.selected
    }));
  }
}
