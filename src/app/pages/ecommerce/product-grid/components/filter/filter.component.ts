import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'filter',
  templateUrl: './filter.template.html',
  styleUrls: ['./filter.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @Input() public filters: any = {};
}
