import { Component } from '@angular/core';
import * as data from '../account/account.data';

@Component({
  selector: '[elements]',
  templateUrl: './elements.template.html',
  styleUrls: [ './elements.style.scss' ]
})
export class Elements {
  getSelect2CountryList(): [string] {
    return data.select2CountryData;
  }
}
