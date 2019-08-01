import { Component } from '@angular/core';

import mock, { toggle } from './products.mock';
import mockFilters from './filters.mock';

@Component({
  selector: '[product-grid]',
  templateUrl: './product-grid.template.html',
  styleUrls: ['./product-grid.style.scss', './product-card.style.scss']
})
export class ProductGridComponent {
  public products = mock;
  public filters = mockFilters;
  public activeModalFilter: number = null;

  public changeItem = function(id) {
    toggle.call(this, id);
  };

  public openModal(id) {
    this.activeModalFilter = id;
    console.log(this.activeModalFilter);
  }

  public closeModal() {
    this.activeModalFilter = null;
  }
}
