import { AfterViewInit, Component, ElementRef, inject, Input, OnDestroy } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, EffectFlip } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

@Component({
  standalone: false,
  selector: 'widget-swiper',
  host: {class: 'swiper'},
  template: '<div class="swiper-wrapper"><ng-content></ng-content></div>'
})
export class WidgetSwiperComponent implements AfterViewInit, OnDestroy {
  @Input() config: SwiperOptions;
  private readonly element = inject(ElementRef<HTMLElement>);
  private swiper: Swiper;

  ngAfterViewInit(): void {
    this.swiper = new Swiper(this.element.nativeElement, {modules: [Autoplay, EffectFlip], ...this.config});
  }

  ngOnDestroy(): void {
    this.swiper.destroy();
  }
}
