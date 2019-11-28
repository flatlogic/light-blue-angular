import { Component, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import Shuffle, { ShuffleOptions } from 'shufflejs';
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import { GalleryItem, galleryItems, photoswipeItems } from './gallery-items';


@Component({
  selector: '[extra-gallery]',
  templateUrl: './gallery.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./gallery.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
  @ViewChild('gallery', { static: false }) public galleryRef: ElementRef<HTMLElement>;
  @ViewChild('pswp', { static: false }) public pswpRef: ElementRef<HTMLElement>;
  public photoSwipe: PhotoSwipe<PhotoSwipe.Options>;
  public items: GalleryItem[] = galleryItems;
  public activeGroup: string = 'all';
  public order: boolean = false;
  public shuffle: any;
  shuffleOptions: ShuffleOptions = {
    itemSelector: '.gallery-item',
    sizer: '.js-shuffle-sizer',
    delimeter: ','
  };

  activeGroupSelected(group: string): void {
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

  public ngAfterViewInit(): void {
    this.shuffle = new Shuffle(this.galleryRef.nativeElement, this.shuffleOptions);
    this.activeGroupSelected('all');
  }

  public ngOnDestroy(): void {
    if (Boolean(this.photoSwipe)) {
      this.photoSwipe.close();
    }
    if (Boolean(this.shuffle)) {
      this.shuffle.destroy();
    }
  }

  public onItemClick(index: number): void {
    this.photoSwipe = new PhotoSwipe(
      this.pswpRef.nativeElement,
      PhotoSwipeUI_Default,
      photoswipeItems,
      {
        showAnimationDuration: 0,
        history: false,
        index
      }
    );
    this.photoSwipe.init();
  }
}

