import { Component } from '@angular/core';

@Component({
  selector: '[maps-google]',
  templateUrl: './maps-google.template.html',
  styles: [`
    .content-map {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
    }
  `]
})
export class MapsGoogleComponent {
  lat: number = -37.813179;
  lng: number = 144.950259;
  zoom: number = 12;
}
