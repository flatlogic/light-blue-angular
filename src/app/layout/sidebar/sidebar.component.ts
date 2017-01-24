import { Component } from '@angular/core';
import { Renderer } from '@angular/core';

@Component({
  selector: '[sidebar]',
  templateUrl: './sidebar.template.html'
})
export class Sidebar {

  constructor(private renderer: Renderer) {
  }

  setSidebarHeight(event) {
    let sidebar = document.getElementById('side-nav');
    if (window.innerWidth < 768){
      let sidebarMarginTop = parseInt(window.getComputedStyle(sidebar).marginTop);
      let sidebarMarginBottom = parseInt(window.getComputedStyle(sidebar).marginBottom);
      let sidebarHeight = sidebar.offsetHeight + sidebarMarginTop + sidebarMarginBottom;
      let closestAccordionGroup = event.target.closest('.accordion-group');
      let submenuHeight = 0;
      let submenuItems = closestAccordionGroup.querySelectorAll('ul > li');
      submenuItems.forEach(() => {
        submenuHeight += 26;
      });
      let expandedMenu = closestAccordionGroup.querySelector('.accordion-body').getAttribute('aria-expanded');
      if(expandedMenu === 'false') {
        sidebarHeight += submenuHeight;
      } else {
        sidebarHeight -= submenuHeight;
      }
      this.renderer.setElementStyle(document.querySelector('.content'), 'margin-top', sidebarHeight + 'px');
    }
  }
}
