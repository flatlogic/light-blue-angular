import {AfterViewInit, Directive, ElementRef} from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[bootstrap-wizard]'
})

export class BootstrapWizardDirective implements AfterViewInit {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  render(): void {
    this.$el.bootstrapWizard({
      onTabShow: ($activeTab, $navigation, index): void => {
        const $total = $navigation.find('li').length;
        const $current = index + 1;
        const $percent = ($current / $total) * 100;
        const $wizard = this.$el;
        $wizard.find('#bar').css({width: $percent + '%'});

        if ($current >= $total) {
          $wizard.find('.pager .next').hide();
          $wizard.find('.pager .finish').show();
          $wizard.find('.pager .finish').removeClass('disabled');
        } else {
          $wizard.find('.pager .next').show();
          $wizard.find('.pager .finish').hide();
        }

        // setting done class
        $navigation.find('li').removeClass('done');
        $activeTab.prevAll().addClass('done');
      },

      // validate on tab change
      onNext: function($activeTab, $navigation, nextIndex): boolean {
        const $activeTabPane = jQuery($activeTab.find('a[data-toggle=tab]').attr('href')),
          $form = $activeTabPane.find('form');

        // validate form in casa there is form
        if ($form.length) {
          return $form.parsley().validate();
        }
      },
      // diable tab clicking
      onTabClick: function($activeTab, $navigation, currentIndex, clickedIndex): boolean {
        return $navigation.find('li:eq(' + clickedIndex + ')').is('.done');
      }
    });
  }

  ngAfterViewInit(): void {
    this.render();
  }
}
