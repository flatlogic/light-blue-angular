import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'error',
  styleUrls: ['./error.style.scss'],
  templateUrl: './error.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'error-page container'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {
  constructor(private router: Router) {
  }

  searchResult(): void {
    this.router.navigate(['/app', 'dashboard']);
  }
}
