import { Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { useTheme, create, color, Circle, MouseCursorStyle } from '@amcharts/amcharts4/core';
import { MapChart, projections, MapPolygonSeries, ZoomControl, MapImageSeries } from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
useTheme(am4themes_animated);
import { data } from './data';

@Component({
  selector: '[maps-vector]',
  templateUrl: './maps-vector.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./vector-map.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapsVectorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map', { static: false }) public mapRef: ElementRef<HTMLElement>;

  public map: MapChart;

  constructor(private zone: NgZone) { }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      let map = create(this.mapRef.nativeElement, MapChart);
      map.geodata = am4geodata_worldLow;
      map.projection = new projections.Miller();
      let polygonSeries = map.series.push(new MapPolygonSeries());
      polygonSeries.useGeodata = true;
      polygonSeries.exclude = ['AQ'];

      map.zoomControl = new ZoomControl();
      map.zoomControl.align = 'left';
      map.zoomControl.valign = 'bottom';
      map.zoomControl.dy = -20;

      map.zoomControl.minusButton.background.fill = color('#000');
      map.zoomControl.minusButton.background.fillOpacity = 0.24;
      map.zoomControl.minusButton.background.stroke = null;
      map.zoomControl.plusButton.background.fill = color('#000');
      map.zoomControl.plusButton.background.fillOpacity = 0.24;
      map.zoomControl.plusButton.background.stroke = null;
      map.zoomControl.plusButton.label.fill = color('#fff');
      map.zoomControl.plusButton.label.fontWeight = '600';
      map.zoomControl.plusButton.label.fontSize = 16;
      map.zoomControl.minusButton.label.fill = color('#fff');
      map.zoomControl.minusButton.label.fontWeight = '600';
      map.zoomControl.minusButton.label.fontSize = 16;
      map.zoomControl.cursorOverStyle = MouseCursorStyle.pointer;
      let plusButtonHoverState = map.zoomControl.plusButton.background.states.create('hover');
      plusButtonHoverState.properties.fill = color('#798892');
      let minusButtonHoverState = map.zoomControl.minusButton.background.states.create('hover');
      minusButtonHoverState.properties.fill = color('#798892');

      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = '{name}';
      polygonTemplate.fill = color('#798892');
      let hs = polygonTemplate.states.create('hover');
      hs.properties.fill = color('#29323a');

      let placeSeries = map.series.push(new MapImageSeries());
      let place = placeSeries.mapImages.template;
      place.nonScaling = true;
      place.propertyFields.latitude = 'latitude';
      place.propertyFields.longitude = 'longitude';
      let circle = place.createChild(Circle);
      circle.radius = 5;
      circle.fill = color('#ffc247');
      circle.stroke = color('#ffffff');
      circle.strokeWidth = 2;
      placeSeries.data = data;
      circle.tooltipText = '{name}';

      this.map = map;
    });
  }

  public ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (Boolean(this.map)) {
        this.map.dispose();
      }
    });
  }
}
