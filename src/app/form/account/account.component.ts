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
  birthDate: Date = new Date(2016, 5, 10);
  expirationDate: Date = new Date(2017, 5, 10);

  getSelect2StateList(): [string] {
    return data.select2StateData;
  }

  getSelect2CountryList(): [string] {
    return data.select2CountryData;
  }

  getSelect2WebsiteAssociateList(): [string] {
    return data.select2WebsiteAssociateList;
  }

  getSelect2AccountGroupsList(): [string] {
    return data.select2AccountGroupsList;
  }

  ngOnInit(): void {
    jQuery('.parsleyjs').parsley({
      errorsContainer:  function ( elem, isRadioOrCheckbox ) {
        return jQuery(elem.$element).closest('.form-group').children('label');
      }
    });
    jQuery('.selectpicker').selectpicker();
  }
}
