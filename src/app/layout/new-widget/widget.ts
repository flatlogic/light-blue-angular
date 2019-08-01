import {AfterViewInit, Component, ElementRef, HostBinding, Input} from '@angular/core';
declare let jQuery: any;

import 'widgster';

@Component ({
  selector: 'widget',
  templateUrl: './widget.html'
})

export class WidgetComponent implements AfterViewInit {
  @HostBinding('class.widget') readonly widgetClass: boolean = true;
  $el: any;
  randomId: number;

  @Input() customHeader: boolean = false;
  @Input() tooltipPlacement: string = 'top';
  @Input() showTooltip: boolean = false;
  @Input() close: boolean = false;
  @Input() fullscreen: boolean = false;
  @Input() collapse: boolean = false;
  @Input() settings: boolean = false;
  @Input() settingsInverse: boolean = false;
  @Input() refresh: boolean = false;
  @Input() title: string = '';
  @Input() customControls: string = null;
  @Input() bodyClass: string = '';
  @Input() options: any = null;
  @Input() dataWidgster: any = null;

  constructor(el: ElementRef) {
    this.randomId = Math.floor(Math.random() * 100);

    this.$el = jQuery(el.nativeElement);
    jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = '.widget-body';

    /*
     When widget is closed remove its parent if it is .col-*
     */
    jQuery(document).on('close.widgster', (e) => {
      const $colWrap = jQuery(e.target)
        .closest('.content > .row > [class*="col-"]:not(.widget-container)');

      // remove colWrap only if there are no more widgets inside
      if (!$colWrap.find('.widget').not(e.target).length) {
        $colWrap.remove();
      }
    });
  }

  get mainControls() {
    return (this.close || this.fullscreen || this.collapse
      || this.refresh || this.settings || this.settingsInverse);
  }

  isString(data): boolean {
    return typeof data === 'string';
  }

  ngAfterViewInit() {
    this.$el.widgster();
  }
}
