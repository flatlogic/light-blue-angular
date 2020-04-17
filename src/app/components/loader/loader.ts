import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.html',
  styleUrls: ['./loader.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoaderComponent {
  @Input() size: number = 21;
}
