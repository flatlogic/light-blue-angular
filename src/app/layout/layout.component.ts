import { Component, ViewEncapsulation, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'layout',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './layout.template.html'
})
export class Layout {

  constructor(private el: ElementRef, private renderer: Renderer) {}

  sidebarPosition(position): void {
    let pos = position === 'Right' ? true : false;
    this.renderer.setElementClass(this.el.nativeElement, 'sidebar-on-right', pos);
  }

  sidebarDisplay(display): void {
    let _display = display === 'Hide' ? true : false;
    this.renderer.setElementClass(this.el.nativeElement, 'sidebar-hidden', _display);
  }
}
