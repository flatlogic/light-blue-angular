import { Component, Input } from '@angular/core';


@Component({
  selector: 'filter',
  templateUrl: './filter.template.html',
  styleUrls: ['./filter.style.scss']
})
export class FilterComponent {
  @Input() public filters: any = {};
}
