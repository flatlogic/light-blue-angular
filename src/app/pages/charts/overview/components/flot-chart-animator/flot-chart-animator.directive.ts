import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
declare let jQuery: any;

@Directive({
  selector: '[flot-chart-animator]'
})

export class FlotChartAnimatorDirective implements AfterViewInit {
  $el: any;
  @Input() data: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  render(): void {
    const data = this.data;
    const $el = this.$el;

    const resize = () => {
      jQuery.plotAnimator($el, data, {
        xaxis: {
          tickLength: 0,
          tickDecimals: 0,
          min: 2,
          font : {
            lineHeight: 13,
            weight: 'bold',
          },
          color: '#fff'
        },
        yaxis: {
          tickDecimals: 0,
          tickColor: '#f3f3f3',
          font : {
            lineHeight: 13,
            weight: 'bold',
          },
          color: '#fff'
        },
        grid: {
          borderWidth: 1,
          borderColor: '#f0f0f0',
          margin: 0,
          minBorderMargin: 0,
          labelMargin: 20,
          hoverable: true,
          clickable: true,
          mouseActiveRadius: 6
        },
        legend: false
      });
    }

    jQuery(window).on('sn:resize', resize);
    resize();
  }

  ngAfterViewInit(): void {
    this.render();
  }
}
