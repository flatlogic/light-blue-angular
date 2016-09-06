import { Component } from '@angular/core';

import {Sidebar} from './sidebar';
import {Navbar} from './navbar';

@Component({
  selector: '[core]',
  templateUrl: './core.template.html',
  styles: [require('./core.style.scss')],
  directives: [Sidebar, Navbar]
})
export class Core {

}
