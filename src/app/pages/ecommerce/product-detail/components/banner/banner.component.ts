import { Component, Input } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.template.html',
  styleUrls: ['./banner.style.scss']
})
export class BannerComponent {
  @Input() image: string = '';
}
