import * as Shuffle from 'shufflejs/dist/shuffle.js';

import {Component, OnInit, ViewEncapsulation} from '@angular/core';

declare let jQuery: any;

@Component({
  selector: '[extra-gallery]',
  templateUrl: './gallery.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./gallery.style.scss']
})
export class GalleryComponent implements OnInit {
  magnificOptions: any = {
    delegate: '.img-thumbnail > a',
    type: 'image',
    gallery: { enabled: true  }
  };
  items: Array<any> = [
  {
    'name': 'Mountains',
    'groups': [
      'nature'
    ],
    'src': 'assets/img/pictures/1.jpg',
    'date': '10 mins'
  },
  {
    'name': 'Empire State Pigeon',
    'groups': [
      'people'
    ],
    'src': 'assets/img/pictures/2.jpg',
    'date': '1 hour',
    'like': true
  },
  {
    'name': 'Big Lake',
    'groups': [
      'nature'
    ],
    'src': 'assets/img/pictures/3.jpg',
    'date': '2 mins',
    'like': true
  },
  {
    'name': 'Forest',
    'groups': [
      'nature'
    ],
    'src': 'assets/img/pictures/4.jpg',
    'date': '2 mins',
    'like': true
  },
  {
    'name': 'Smile',
    'groups': [
      'people'
    ],
    'src': 'assets/img/pictures/5.jpg',
    'date': '2 mins'
  },
  {
    'name': 'Smile',
    'groups': [
      'people'
    ],
    'src': 'assets/img/pictures/6.jpg',
    'date': '1 hour',
    'like': true
  },
  {
    'name': 'Fog',
    'groups': [
      'nature'
    ],
    'src': 'assets/img/pictures/8.jpg',
    'date': '2 mins',
    'like': true
  },
  {
    'name': 'Beach',
    'groups': [
      'people'
    ],
    'src': 'assets/img/pictures/9.jpg',
    'date': '2 mins'
  },
  {
    'name': 'Pause',
    'groups': [
      'people'
    ],
    'src': 'assets/img/pictures/10.jpg',
    'date': '3 hour',
    'like': true
  },
  {
    'name': 'Space',
    'groups': [
      'space'
    ],
    'src': 'assets/img/pictures/11.jpg',
    'date': '3 hour',
    'like': true
  },
  {
    'name': 'Shuttle',
    'groups': [
      'space'
    ],
    'src': 'assets/img/pictures/13.jpg',
    'date': '35 mins',
    'like': true
  },
  {
    'name': 'Sky',
    'groups': [
      'space'
    ],
    'src': 'assets/img/pictures/14.jpg',
    'date': '2 mins'
  }
];
  activeGroup: string = 'all';
  order: boolean = false;
  $gallery: any;
  shuffle: any;
  shuffleOptions: Object = {
    itemSelector: '.gallery-item',
    sizer: '.js-shuffle-sizer',
    delimeter: ','
  };

  activeGroupSelected(group): void {
    this.shuffle.filter(group);
    this.activeGroup = group;
  }

  orderSelected(order): void {
    function sortByTitle(element): string {
      return element.getAttribute('data-title').toLowerCase();
    }

    this.shuffle.sort({
      reverse: order,
      by: sortByTitle
    });
    this.order = order;
  }

  ngOnInit(): void {
    this.$gallery = jQuery('#magnific');
    this.$gallery.magnificPopup(this.magnificOptions);

    setTimeout(() => {
      this.shuffle = new Shuffle(this.$gallery, this.shuffleOptions);
      setTimeout(() => {
        this.activeGroupSelected('all');
      });
    });
  }
}

