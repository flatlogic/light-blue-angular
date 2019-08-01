import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[mapael-layers-map]'
})

export class MapaelLayersMapDirective implements AfterViewInit {
  $el: any;
  @Input() height: number;
  @Input() marginBottom: number;
  @Input() data: any;
  @Input() zoom: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  render(): void {
    const $map = this.$el;
    $map.css('height', this.height || 394).css('margin-bottom', this.marginBottom || (-15));
    if ($map.parents('.widget')[0]) {
      $map.find('.map').css('height', parseInt($map.parents('.widget').css('height'), 10) - 40);
    }
    $map.mapael(this.data);

    if (this.zoom) {
      $map.trigger('zoom', this.zoom);
    }
  }

  ngAfterViewInit(): void {
    this.render();
  }
}
