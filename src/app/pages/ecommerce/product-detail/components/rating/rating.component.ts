import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.template.html',
  styleUrls: ['./rating.style.scss']
})
export class RatingComponent {
  @Input() rating: number = null;
  @Input() size: string = '';
}
