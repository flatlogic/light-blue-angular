import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: false,
  selector: '[profile]',
  templateUrl: './profile.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./profile.style.scss']
})
export class ProfileComponent {
}
