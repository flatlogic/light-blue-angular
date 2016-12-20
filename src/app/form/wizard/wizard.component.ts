import { Component, ViewEncapsulation } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: '[wizard]',
  templateUrl: './wizard.template.html',
  styleUrls: [ './wizard.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Wizard {

  ngOnInit(): void {
    jQuery('.chzn-select').select2();
  }
}
