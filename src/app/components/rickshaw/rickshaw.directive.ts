import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
declare let jQuery: any;
declare let Rickshaw: any;

@Directive ({
  selector: '[rickshaw-chart]'
})

export class RickshawChartDirective implements AfterViewInit {
  $el: any;
  @Input() height: string;
  @Input() series: Array<any>;
  @Input() seriesData: Array<any>;
  @Input() random: any;
  @Input() configureProps: Object;
  @Input() realtime: boolean;
  @Input() renderer: string;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  render(): void {
    const graph = new Rickshaw.Graph({
      element: this.$el[0],
      height: this.height,
      renderer: this.renderer || 'area',
      series: this.series
    });

    const onResize = () => {
      const configureProperties = jQuery.extend({
        height: this.height
      }, this.configureProps);
      graph.configure(configureProperties);
      graph.render();

      this.$el.find('svg').css({height: this.height, width: '100%'});
    };

    jQuery(window).on('sn:resize', onResize);
    onResize();

    const hoverDetail = new Rickshaw.Graph.HoverDetail({
      graph: graph,
      xFormatter: function(x): string {
        return new Date(x * 1000).toString();
      }
    });

    if (this.realtime) {
      setInterval( () => {
        this.random.removeData(this.seriesData);
        this.random.addData(this.seriesData);
        graph.update();

      }, 1000 );
    }
  }

  ngAfterViewInit(): void {
    this.render();
  }
}
