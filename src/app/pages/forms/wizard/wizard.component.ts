import {Component, OnInit, ViewEncapsulation} from '@angular/core';
declare let jQuery: any;

@Component({
  selector: '[forms-wizard]',
  templateUrl: './wizard.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./wizard.style.scss']
})
export class WizardComponent implements OnInit {
  destindationMask = {
    mask: [/[1-9]/, /\d/, /\d/, /\d/, /\d/]
  };

  creditMask = {
    mask: [/[1-9]/, /\d/, /\d/, /\d/, '-',
      /\d/, /\d/, /\d/, /\d/, '-',
      /\d/, /\d/, /\d/, /\d/, '-',
      /\d/, /\d/, /\d/, /\d/
    ]
  };

  destinationValue = '';
  creditValue = '';

  unmask(event) {
    return event.replace(/\D+/g, '');
  }

  ngOnInit(): void {
    jQuery('.select2').select2();
  }
}
