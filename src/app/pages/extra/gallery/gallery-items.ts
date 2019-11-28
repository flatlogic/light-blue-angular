import { Item } from 'photoswipe';

export interface GalleryItem {
  name: string;
  groups: string[];
  src: string;
  date: string;
  like?: boolean;
  w: number;
  h: number;
}

export const galleryItems: GalleryItem[] = [
  {
    name: 'Mountains',
    groups: [
      'nature'
    ],
    src: 'assets/img/pictures/1.jpg',
    date: '10 mins',
    w: 1400,
    h: 933
  },
  {
    name: 'Empire State Pigeon',
    groups: [
      'people'
    ],
    src: 'assets/img/pictures/2.jpg',
    date: '1 hour',
    like: true,
    w: 1400,
    h: 788
  },
  {
    name: 'Big Lake',
    groups: [
      'nature'
    ],
    src: 'assets/img/pictures/3.jpg',
    date: '2 mins',
    like: true,
    w: 1400,
    h: 933
  },
  {
    name: 'Forest',
    groups: [
      'nature'
    ],
    src: 'assets/img/pictures/4.jpg',
    date: '2 mins',
    like: true,
    w: 1400,
    h: 933
  },
  {
    name: 'Smile',
    groups: [
      'people'
    ],
    src: 'assets/img/pictures/5.jpg',
    date: '2 mins',
    w: 1400,
    h: 768
  },
  {
    name: 'Smile',
    groups: [
      'people'
    ],
    src: 'assets/img/pictures/6.jpg',
    date: '1 hour',
    like: true,
    w: 1400,
    h: 933
  },
  {
    name: 'Fog',
    groups: [
      'nature'
    ],
    src: 'assets/img/pictures/8.jpg',
    date: '2 mins',
    like: true,
    w: 1400,
    h: 958
  },
  {
    name: 'Beach',
    groups: [
      'people'
    ],
    src: 'assets/img/pictures/9.jpg',
    date: '2 mins',
    w: 1400,
    h: 933
  },
  {
    name: 'Pause',
    groups: [
      'people'
    ],
    src: 'assets/img/pictures/10.jpg',
    date: '3 hour',
    like: true,
    w: 1400,
    h: 933
  },
  {
    name: 'Space',
    groups: [
      'space'
    ],
    src: 'assets/img/pictures/11.jpg',
    date: '3 hour',
    like: true,
    w: 1400,
    h: 933
  },
  {
    name: 'Shuttle',
    groups: [
      'space'
    ],
    src: 'assets/img/pictures/13.jpg',
    date: '35 mins',
    like: true,
    w: 1400,
    h: 933
  },
  {
    name: 'Sky',
    groups: [
      'space'
    ],
    src: 'assets/img/pictures/14.jpg',
    date: '2 mins',
    w: 908,
    h: 681
  }
];

export const photoswipeItems: Item[] = galleryItems.map((item: GalleryItem) => ({
  src: item.src,
  h: item.h,
  w: item.w
}));
