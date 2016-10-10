import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[navbar]',
  templateUrl: './navbar.template.html'
})
export class Navbar {
  @Output() changeSidebarPosition = new EventEmitter();
  @Output() changeSidebarDisplay = new EventEmitter();

  display:string = 'Left';
  radioModel:string = 'Left';

  sidebarPosition(position): void {
    this.changeSidebarPosition.emit(position);
  }

  sidebarDisplay(position): void {
    this.changeSidebarDisplay.emit(position);
  }
}
