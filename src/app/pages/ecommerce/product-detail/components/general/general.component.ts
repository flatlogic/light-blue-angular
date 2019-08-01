import { Component, Input } from '@angular/core';

@Component({
  selector: 'general',
  templateUrl: './general.template.html',
  styleUrls: ['./general.style.scss']
})
export class GeneralComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() price: number = null;
  @Input() rating: number = null;
}
