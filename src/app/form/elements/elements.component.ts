import { Component, ViewEncapsulation } from '@angular/core';
import * as data from '../account/account.data';

declare var jQuery: any;

@Component({
  selector: '[elements]',
  templateUrl: './elements.template.html',
  styleUrls: [ './elements.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Elements {
  getSelect2CountryList(): [string] {
    return data.select2CountryData;
  }

  ngOnInit(): void {
    jQuery('.selectpicker').selectpicker();
  }
}
