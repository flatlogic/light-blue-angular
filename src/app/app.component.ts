/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'body',
  encapsulation: ViewEncapsulation.None,
  styles: [require('../sass/application.scss')],
  templateUrl: './app.template.html'
})
export class App {
}
