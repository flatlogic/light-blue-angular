import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[extra-invoice]',
  templateUrl: './invoice.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./invoice.style.scss']
})
export class InvoiceComponent {
  print(): void {
    window.print();
  }
}
