import { Component, ViewEncapsulation } from '@angular/core';

import {Select2OptionData} from 'ng2-select2/ng2-select2';
import * as data from './wizard.data';

declare var jQuery: any;

@Component({
  selector: '[wizard]',
  templateUrl: './wizard.template.html',
  styleUrls: [ './wizard.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Wizard {
  getSelect2CountriesList(): Select2OptionData[] {
    return data.select2CountriesData;
  }

  getSelect2Shipment(): Select2OptionData[] {
    return data.select2ShipmentData
  }

  getSelect2CardTypes(): Select2OptionData[] {
    return data.cardTypesData;
  }
}
