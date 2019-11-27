import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[typography]',
  templateUrl: './typography.template.html',
  styleUrls: ['./typography.style.scss'],
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypographyComponent {
}
