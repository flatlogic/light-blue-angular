import { Component } from '@angular/core';

@Component({
  selector: '[dashboard]',
  templateUrl: './dashboard.template.html',
  styleUrls: [
    './dashboard.style.scss'
  ],
})
export class Dashboard {
  messages = [
    {
      'time': '4 min',
      'sender': 'Tikhon Laninga',
      'text': 'Hey Sam, how is it going? But I must explain to you how all this mistaken\
      idea of denouncing of a pleasure and praising pain was born',
      'image': '../../../assets/img/2.png'
    },
    {
      'time': '3 min',
      'sender': 'Cenhelm Houston',
      'text': 'Pretty good. Doing my homework..  No one rejects, dislikes, or avoids\
        pleasure itself, because it is pleasure, but because',
      'image': '../../../assets/img/1.png'
    },
    {
      'time': '2 min',
      'sender': 'Tikhon Laninga',
      'text': 'Anys chance to go out? To take a trivial example, which of us ever undertakes\
        laborious physical exercise, except to obtain some advantage',
      'image': '../../../assets/img/2.png'
    },
    {
      'time': '2 min',
      'sender': 'Cenhelm Houston',
      'text': '.. Maybe 40-50 mins. I don\'t know exactly. On the other hand, we denounce\
  with righteous indignation and dislike men who are so beguiled',
      'image': '../../../assets/img/1.png'
    },
    {
      'time': '1 min',
      'sender': 'Tikhon Laninga',
      'text': 'Anyway sounds great! These cases are perfectly simple and easy to\
      distinguish.',
      'image': '../../../assets/img/2.png'
    }
  ];
}
