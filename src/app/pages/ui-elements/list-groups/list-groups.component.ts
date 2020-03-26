import {Component, ViewEncapsulation, AfterViewInit} from '@angular/core';
declare let jQuery: any;

@Component({
  selector: '[ui-list-groups]',
  templateUrl: './list-groups.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./list-groups.style.scss']
})
export class ListGroupsComponent implements AfterViewInit {
  sortOptions: Object = {
    placeholder: 'list-group-item list-group-item-placeholder',
    forcePlaceholderSize: true
  };
  nest1Options: Object = { group: 1 };
  nest2Options: Object = { group: 1 };

  public ngAfterViewInit(): void {
    jQuery( '.list-group-sortable' ).sortable(this.sortOptions);
    jQuery( '#nestable1' ).nestable(this.nest1Options);
    jQuery( '#nestable2' ).nestable(this.nest2Options);
  }
}

