import { Directive, ElementRef } from '@angular/core';
declare var jQuery: any;
declare var Tether: any;

@Directive ({
  selector: '[form-wizard]'
})

export class FormWizard {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  render(): void {
    jQuery(this.$el).bootstrapWizard({onTabShow: function(tab, navigation, index) {
      var $total = navigation.find('li').length;
      var $current = index+1;
      var $percent = ($current/$total) * 100;
      var $wizard = jQuery("#wizard");
      $wizard.find('.bar').css({width:$percent+'%'});

      if($current >= $total) {
        $wizard.find('.pager .next').hide();
        $wizard.find('.pager .finish').show();
        $wizard.find('.pager .finish').removeClass('disabled');
      } else {
        $wizard.find('.pager .next').show();
        $wizard.find('.pager .finish').hide();
      }
    }});
  }

  ngOnInit(): void {
    this.render();
  }
}
