import { Component, Input } from '@angular/core';

@Component({
  selector: '[chat]',
  templateUrl: './chat.template.html'
})
export class Chat {
  _messages;
  message;
  @Input()
  set messages(messages: Array<any>) {
    this._messages = messages || '<no message set>';
  }

  get name() { return this._messages; }

  addMessage(message) {
    this._messages.push({
      'time': 'just now',
      'sender': 'Tikhon Laninga',
      'text': `${message}`,
      'image': '../../../assets/img/2.png'
    });
  }
}
