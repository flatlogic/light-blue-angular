import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'filter-dropdown',
  templateUrl: './filter-dropdown.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterDropdownComponent {
  @Input() public dropdown: string[] = [];
}
