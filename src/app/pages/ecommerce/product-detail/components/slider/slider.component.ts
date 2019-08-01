import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.template.html',
  styleUrls: ['./slider.style.scss', '../../../product-grid/product-card.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent {
  @Input() cards: Array<any> = [];

  public toggleSliderProductStarred(id) {
    const index = this.cards.findIndex((it) => it.id === id);
    this.cards[index].starred = !this.cards[index].starred;
  }
}
