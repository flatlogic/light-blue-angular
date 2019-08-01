import { Component, Input } from '@angular/core';

@Component({
  selector: 'selects',
  templateUrl: './selects.template.html',
  styleUrls: ['./selects.style.scss']
})
export class SelectsComponent {
  @Input() sizes: number[] = [];
  @Input() quantity: number[] = [];

  public currentSize: string | number = 'Select size';
  public currentQuantity: string | number = 1;

  changeValue(field, value) {
    this[field] = value;
  }
}
