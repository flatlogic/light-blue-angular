import { Component } from '@angular/core';

@Component({
  selector: '[buttons]',
  templateUrl: './buttons.template.html',
  styleUrls: ['./buttons.style.scss'],
  preserveWhitespaces: true
})
export class ButtonsComponent {
  checkboxModel: any = { left: false, middle: true, right: false };
  checkbox2Model: any = { left: false, middle: false, right: false };
  radioModel: string = 'Middle';
  radio2Model: string = 'Left';
}
