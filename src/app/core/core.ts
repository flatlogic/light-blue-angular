import { Component } from '@angular/core';

import {Sidebar} from './sidebar';

@Component({
  selector: '[core]',
  templateUrl: './core.template.html',
  styles: [require('./core.style.scss')],
  directives: [Sidebar]
})
export class Core {

}
