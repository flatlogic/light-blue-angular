import {Component, Input, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'big-stat',
  templateUrl: './big-stat.template.html',
  styleUrls: ['./big-stat.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BigStatComponent {
  text: string = 'Daily';

  @Input('product') product: string;
  @Input('color') color: string;
  @Input('total') total: string;
  @Input('registrations') registrations: any = {};
  @Input('bounce') bounce: any = {};

  changeText(e, text) {
    e.preventDefault();
    this.text = text;
  }
}

