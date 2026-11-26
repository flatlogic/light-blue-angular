import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'rating',
  templateUrl: './rating.template.html',
  styleUrls: ['./rating.style.scss']
})
export class RatingComponent {
  @Input() rating: number = null;
  @Input() size: string = '';
}
