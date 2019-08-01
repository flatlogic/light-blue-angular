import {AfterViewInit, Directive} from '@angular/core';
declare let jQuery: any;

@Directive({
  selector: '[grid-demo]',
})

export class GridDemoDirective implements AfterViewInit {
  render(): void {
    const $widgets = jQuery('.widget'),
      $newsWidget = jQuery('#news-widget'),
      $sharesWidget = jQuery('#shares-widget'),
      $autoloadWidget = jQuery('#autoload-widget');

    /**
     * turn off .content-wrap transforms & disable sorting when widget fullscreened
     */
    $widgets.on('fullscreen.widgster', () => {
      jQuery('.content-wrap').css({
        '-webkit-transform': 'none',
        '-ms-transform': 'none',
        transform: 'none',
        'margin': 0,
        'z-index': 2
      });
      // prevent widget from dragging when fullscreened
      jQuery('.widget-container').sortable( 'option', 'disabled', true );
    }).on('restore.widgster closed.widgster', () => {
      jQuery('.content-wrap').css({
        '-webkit-transform': '',
        '-ms-transform': '',
        transform: '',
        margin: '',
        'z-index': ''
      });
      jQuery('body').css({
        'overflow-y': 'scroll'
      });
      // allow dragging back
      jQuery('.widget-container').sortable( 'option', 'disabled', false );
    });

    /**
     * Make refresh button spin when loading
     */
    $newsWidget.on('load.widgster', function(): void {
      jQuery(this).find('[data-widgster="load"] > i').addClass('fa-spin');
    }).on('loaded.widgster', function(): void {
      jQuery(this).find('[data-widgster="load"] > i').removeClass('fa-spin');
    });

    /**
     * Custom close prompt for news widget
     */
    $newsWidget.widgster({
      showLoader: false,
      closePrompt: function(callback): void {
        jQuery('#news-close-modal').modal('show');
        jQuery('#news-widget-remove').on('click', () => {
          jQuery('#news-close-modal').on('hidden.bs.modal', callback).modal('hide');
        });
      }
    });

    /**
     * Use custom loader template
     */
    $sharesWidget.widgster({
      loaderTemplate: '<div class="loader animated fadeIn">' +
      '   <span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>' +
      '</div>'
    });

    /**
     * Make hidden spinner appear & spin when loading
     */
    $autoloadWidget.on('load.widgster', function(): void {
      jQuery(this).find('.fa-spinner').addClass('fa-spin in');
    }).on('loaded.widgster', function(): void {
      jQuery(this).find('.fa-spinner').removeClass('fa-spin in');
    }).on('load.widgster fullscreen.widgster restore.widgster', function(): void {
      jQuery(this).find('.dropdown.open > .dropdown-toggle').dropdown('toggle');
    });

    /**
     * Init all other widgets with default settings & settings retrieved from data-* attributes
     */
    $widgets.widgster();

    /**
     * Init tooltips for all widget controls on page
     */
    jQuery('.widget-controls > a').tooltip({placement: 'bottom'});
  }

  ngAfterViewInit(): void {
    this.render();
  }
}
