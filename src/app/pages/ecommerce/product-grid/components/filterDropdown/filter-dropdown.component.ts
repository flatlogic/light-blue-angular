import { Component, Input } from '@angular/core';


@Component({
  selector: 'filter-dropdown',
  templateUrl: './filter-dropdown.template.html'
})
export class FilterDropdownComponent {
  @Input() public dropdown: string[] = [];
}
