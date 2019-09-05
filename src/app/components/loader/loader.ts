import {Component, Input} from '@angular/core';

import 'widgster';

@Component({
  selector: 'loader',
  templateUrl: './loader.html',
  styleUrls: ['./loader.scss']
})

export class LoaderComponent {
  @Input() size: number = 21;
}
