import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[maps-vector]',
  templateUrl: './maps-vector.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./vector-map.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapsVectorComponent {
}
