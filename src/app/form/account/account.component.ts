import { Component,ViewEncapsulation } from '@angular/core';
import * as data from './account.data';
declare var jQuery: any;

@Component({
  selector: '[account]',
  templateUrl: './account.template.html',
  styleUrls: [ './account.style.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class Account {

  getSelect2StateList(): [string] {
    return data.select2StateData;
  }

  getSelect2CountryList(): [string] {
    return data.select2CountryData;
  }

  ngOnInit(): void {
    jQuery('.select2').select2();
  }
}
