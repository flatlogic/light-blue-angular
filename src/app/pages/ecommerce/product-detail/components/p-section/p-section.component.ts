import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'p-section',
  templateUrl: './p-section.template.html',
  styleUrls: ['./p-section.style.scss']
})
export class PSectionComponent {
  @Input() title: string = '';
  @Input() isMobileTitleHidden: boolean = false;
}
