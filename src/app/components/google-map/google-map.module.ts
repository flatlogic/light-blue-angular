/// <reference types="google.maps" />

import {
  AfterViewInit, Component, DestroyRef, ElementRef, ErrorHandler, inject, InjectionToken, Input,
  ModuleWithProviders, NgModule, OnDestroy, signal, ViewChild
} from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

const API_KEY = new InjectionToken<string>('Google Maps browser API key');
let mapsLoader: Loader;

@Component({
  standalone: false,
  selector: 'app-google-map',
  template: `
    @if (loadFailed()) {
      <a [href]="'https://www.google.com/maps/search/?api=1&query=' + latitude + ',' + longitude">
        Map unavailable. Open this location in Google Maps.
      </a>
    }
    <div #canvas></div>
  `,
  styles: [':host { display: block; } div { width: 100%; height: 100%; }']
})
export class GoogleMapComponent implements AfterViewInit, OnDestroy {
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() zoom = 8;

  @ViewChild('canvas') private canvas: ElementRef<HTMLDivElement>;
  readonly loadFailed = signal(false);
  private readonly errorHandler = inject(ErrorHandler);
  private readonly destroyRef = inject(DestroyRef);
  private readonly apiKey = inject(API_KEY);
  private marker?: google.maps.Marker;

  async ngAfterViewInit(): Promise<void> {
    // The Maps API is loaded once per page, including after a route change.
    mapsLoader ??= new Loader({apiKey: this.apiKey, version: 'weekly'});
    try {
      const [{Map}, {Marker}] = await Promise.all([
        mapsLoader.importLibrary('maps'), mapsLoader.importLibrary('marker')
      ]);
      if (this.destroyRef.destroyed) {
        return;
      }
      const position = {lat: this.latitude, lng: this.longitude};
      const map = new Map(this.canvas.nativeElement, {center: position, zoom: this.zoom});
      this.marker = new Marker({map, position, draggable: true});
    } catch (error) {
      this.loadFailed.set(true);
      this.errorHandler.handleError(error);
    }
  }

  ngOnDestroy(): void {
    this.marker?.setMap(null);
  }
}

@NgModule({declarations: [GoogleMapComponent], exports: [GoogleMapComponent]})
export class GoogleMapModule {
  static forRoot(config: {apiKey: string}): ModuleWithProviders<GoogleMapModule> {
    return {ngModule: GoogleMapModule, providers: [{provide: API_KEY, useValue: config.apiKey}]};
  }
}
