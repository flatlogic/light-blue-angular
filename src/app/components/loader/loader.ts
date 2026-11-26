import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  standalone: false,
  selector: 'loader',
  templateUrl: './loader.html',
  styleUrls: ['./loader.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoaderComponent {
  @Input() size: number = 21;
}
