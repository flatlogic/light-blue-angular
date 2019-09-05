import { Component, Input, ViewEncapsulation } from '@angular/core';
import {Product} from '../../../products.service';

@Component({
  selector: 'description',
  templateUrl: './description.template.html',
  styleUrls: ['./description.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DescriptionComponent {
  @Input() public product: Product = {};

  public accordion: boolean[] = [false, false, false];

  toggleAccordion(id) {
    const newAccordion = [...this.accordion];
    newAccordion[id] = !newAccordion[id];
    this.accordion = newAccordion;
  }

}
