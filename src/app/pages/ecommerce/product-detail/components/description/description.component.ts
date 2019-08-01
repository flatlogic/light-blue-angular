import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'description',
  templateUrl: './description.template.html',
  styleUrls: ['./description.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DescriptionComponent {
  @Input() public description: string = '';

  public accordion: boolean[] = [false, false, false];

  toggleAccordion(id) {
    const newAccordion = [...this.accordion];
    newAccordion[id] = !newAccordion[id];
    this.accordion = newAccordion;
  }

}
