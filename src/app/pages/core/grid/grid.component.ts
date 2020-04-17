import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[grid]',
  templateUrl: './grid.template.html',
  styleUrls: ['./grid.style.scss'],
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
}
