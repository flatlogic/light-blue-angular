import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: '[colors]',
  templateUrl: './colors.template.html',
  styleUrls: ['./colors.style.scss'],
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorsComponent {
}
