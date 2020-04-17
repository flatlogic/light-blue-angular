import { Component, AfterViewInit, OnDestroy, NgZone, ElementRef, ViewChild, ChangeDetectionStrategy, Input } from '@angular/core';
import { useTheme, create, color, MouseCursorStyle } from '@amcharts/amcharts4/core';
import { MapChart, MapPolygonSeries, projections, ZoomControl } from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
useTheme(am4themes_animated);
import { fakeWorldData } from './fake-world-data';

@Component({
  selector: 'years-map-widget',
  templateUrl: './years-map-widget.template.html',
  styleUrls: ['./year-map-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class YearsMapWidgetComponent implements AfterViewInit, OnDestroy {
  selectedYear: number;
  fakeWorldData: any;

  @Input() public height: string = 'initial';

  public map: MapChart;
  @ViewChild('map', { static: false }) public mapRef: ElementRef<HTMLElement>;
  public polygonSeries: MapPolygonSeries;

  constructor(private zone: NgZone) {
    this.fakeWorldData = fakeWorldData;
    this.selectedYear = 2014;
  }

  triggerYear(year): void {
    this.selectedYear = year;
    this.zone.runOutsideAngular(() => {
      this.polygonSeries.data = this.fakeWorldData[year].areas;
    });
  }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      let map = create(this.mapRef.nativeElement, MapChart);
      map.geodata = am4geodata_worldLow;
      map.projection = new projections.Miller();
      map.homeZoomLevel = 10;
      map.homeGeoPoint = {
        latitude: 52,
        longitude: 11
      };
      map.chartContainer.wheelable = false;
      map.seriesContainer.events.disableType('doublehit');
      map.chartContainer.background.events.disableType('doublehit');

      this.polygonSeries = map.series.push(new MapPolygonSeries());
      this.polygonSeries.useGeodata = true;
      this.polygonSeries.exclude = ['AQ'];

      this.polygonSeries.data = this.fakeWorldData[this.selectedYear].areas;

      this.polygonSeries.tooltip.background.fill = color('#fff');
      this.polygonSeries.tooltip.getFillFromObject = false;
      this.polygonSeries.tooltip.label.fill = color('#495057');
      this.polygonSeries.tooltip.autoTextColor = false;

      map.zoomControl = new ZoomControl();
      map.zoomControl.align = 'left';
      map.zoomControl.valign = 'bottom';
      map.zoomControl.dy = -20;
      map.zoomControl.minusButton.background.fill = color('#000');
      map.zoomControl.minusButton.background.fillOpacity = 0.24;
      map.zoomControl.minusButton.background.stroke = color('#ccc');
      map.zoomControl.plusButton.background.fill = color('#000');
      map.zoomControl.plusButton.background.fillOpacity = 0.24;
      map.zoomControl.plusButton.background.stroke = color('#ccc');
      map.zoomControl.plusButton.label.fill = color('#fff');
      map.zoomControl.plusButton.label.fontWeight = '600';
      map.zoomControl.plusButton.label.fontSize = 16;
      map.zoomControl.minusButton.label.fill = color('#fff');
      map.zoomControl.minusButton.label.fontWeight = '600';
      map.zoomControl.minusButton.label.fontSize = 16;
      map.zoomControl.cursorOverStyle = MouseCursorStyle.pointer;
      let plusButtonHoverState = map.zoomControl.plusButton.background.states.create('hover');
      plusButtonHoverState.properties.fill = color('#ccc');
      let minusButtonHoverState = map.zoomControl.minusButton.background.states.create('hover');
      minusButtonHoverState.properties.fill = color('#ccc');

      let polygonTemplate = this.polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipHTML = '{tooltip}';
      polygonTemplate.fill = color('#eee');
      polygonTemplate.stroke = color('#666');
      polygonTemplate.strokeWidth = 0.1;
      let hs = polygonTemplate.states.create('hover');
      hs.properties.fill = color('#999');
      this.polygonSeries.heatRules.push({
        property: 'fill',
        target: polygonTemplate,
        min: color('#eee'),
        max: color('#aaa')
      });

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
