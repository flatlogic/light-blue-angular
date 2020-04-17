import { Component, OnInit } from '@angular/core';
import { Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: '[mail-form]',
  templateUrl: './mail-form.template.html',
})

export class MailFormComponent implements OnInit {
  @Output() backToMailList = new EventEmitter();
  @Input() message: any;

  sender: string = '';
  subject: string = '';
  body: string = 'There are no implementations' +
    ' of Wysiwyg editors in Angular 2 version yet.' +
    ' So we hope it will appear soon.';

  onToBack(): void {
    this.backToMailList.emit('');
  }

  ngOnInit(): void {
    if (this.message) {
      this.sender = this.message.sender;
      this.subject = 'Re: ' + this.message.subject;

      const span = document.createElement('span');
      span.innerHTML = this.message.body;
      this.body = span.innerText;
    }
  }
}

