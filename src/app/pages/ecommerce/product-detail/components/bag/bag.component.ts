import { Component, Input } from '@angular/core';

@Component({
  selector: 'bag',
  templateUrl: './bag.template.html',
  styleUrls: ['./bag.style.scss']
})
export class BagComponent {
  public favorite: boolean = false;

  toggleFavorite() {
    this.favorite = !this.favorite;
  }
}


