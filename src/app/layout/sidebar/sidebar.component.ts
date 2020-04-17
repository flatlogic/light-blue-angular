import { Component, ElementRef, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: '[sidebar]',
  templateUrl: './sidebar.template.html',
  styleUrls: ['./sidebar.component.scss']
})
export class Sidebar implements OnInit, AfterViewInit {
  sidebarHeight: number = 0;
  sidebarMenu: any = 0;

  public sidebarState: SidebarState = {
    dashboardCollapsed: true,
    ecommerceCollapsed: true,
    coreCollapsed: true,
    uiCollapsed: true,
    formsCollapsed: true,
    chartsCollapsed: true,
    tablesCollapsed: true,
    mapsCollapsed: true,
    extraCollapsed: true,
    levelsCollapsed: true
  };

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {
  }

  public ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.sidebarMenu = this.el.nativeElement.querySelector('#side-nav');
  }

  setSidebarHeight(event) {
    if (window.innerWidth < 768) {
      let sidebarMarginTop = parseInt(
        window.getComputedStyle(this.sidebarMenu).marginTop, 10
      );
      let sidebarMarginBottom = parseInt(
        window.getComputedStyle(this.sidebarMenu).marginBottom, 10
      );
      this.sidebarHeight = this.sidebarMenu.offsetHeight + sidebarMarginTop + sidebarMarginBottom;
      let closestAccordionGroup = event.target.closest('.accordion-group');
      let submenuHeight = 0;
      let submenuItems = closestAccordionGroup.querySelectorAll('ul > li');
      submenuItems.forEach(() => {
        submenuHeight += 26;
      });
      let expandedMenu = closestAccordionGroup
        .querySelector('.accordion-body')
        .getAttribute('aria-expanded');
      if (expandedMenu === 'false') {
        this.sidebarHeight += submenuHeight;
      } else {
        this.sidebarHeight -= submenuHeight;
      }
    }
  }

  collapseSubMenu(event) {
    let currentMenu = event.target
      .closest('.accordion-group')
      .querySelector('.accordion-body');
    let collapsingMenu = this.sidebarMenu
      .querySelector('.accordion-group .accordion-body.collapse.show');
    if (collapsingMenu && currentMenu !== collapsingMenu && window.innerWidth < 768) {
      let submenuHeight = 0;
      let submenuItems = collapsingMenu.querySelectorAll('li');
      submenuItems.forEach(() => {
        submenuHeight += 26;
      });
      this.sidebarHeight -= submenuHeight;
    }
  }

  sidebarBehavior(event: Event, key: keyof SidebarState) {
    event.preventDefault();
    this.setSidebarHeight(event);
    Object.keys(this.sidebarState).forEach((k: keyof SidebarState) => {
      this.sidebarState[k] = key === k ? !this.sidebarState[k] : true;
    });
    this.renderer.setStyle(document
      .querySelector('.content'), 'margin-top', this.sidebarHeight + 'px');
  }
}

export interface SidebarState {
  dashboardCollapsed: boolean;
  ecommerceCollapsed: boolean;
  coreCollapsed: boolean;
  uiCollapsed: boolean;
  formsCollapsed: boolean;
  chartsCollapsed: boolean;
  tablesCollapsed: boolean;
  mapsCollapsed: boolean;
  extraCollapsed: boolean;
  levelsCollapsed: boolean;
}
