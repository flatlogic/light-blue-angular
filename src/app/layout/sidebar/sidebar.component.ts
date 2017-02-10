import { Component, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: '[sidebar]',
  templateUrl: './sidebar.template.html'
})
export class Sidebar {
  sidebarMenu: any = 0;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.sidebarMenu = this.el.nativeElement.querySelector('#side-nav');
    if (window.innerWidth > 768) {
      setTimeout(() => {
        jQuery(this.sidebarMenu).find('.accordion-group.active .accordion-body').collapse('show');
      });
    }
  }
}
