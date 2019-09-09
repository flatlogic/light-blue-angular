import { Component } from '@angular/core';

@Component({
  selector: '[maps-google]',
  templateUrl: './maps-google.template.html',
  styles: [`
    .content-map {
      width: 100%;
      height: 60vh;
    }
  `]
})
export class MapsGoogleComponent {
  lat: number = -37.813179;
  lng: number = 144.950259;
  zoom: number = 12;
}
