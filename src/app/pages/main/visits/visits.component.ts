import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  OnDestroy,
  NgZone,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { useTheme, create, color, Circle, MouseCursorStyle } from '@amcharts/amcharts4/core';
import { MapChart, MapPolygonSeries, projections, ZoomControl, MapImageSeries } from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_usaHigh from '@amcharts/amcharts4-geodata/usaHigh';

import { echartDynamicAreaData3 } from '../../../utils/echarts.data';

useTheme(am4themes_animated);

@Component({
  selector: 'visits',
  templateUrl: './visits.template.html',
  styleUrls: ['./visits.style.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitsComponent implements OnInit, AfterViewInit, OnDestroy {
  month: any;
  year: any;
  public echartDynamicAreaData3: any = echartDynamicAreaData3;
  public echartDynamicAreaDataUpdate: any;
  public map: MapChart;
  @ViewChild('map', { static: false }) public mapRef: ElementRef<HTMLElement>;

  private interval: any;

  constructor(private zone: NgZone) {
  }

  ngOnInit(): void {
    const now = new Date();
    this.month = now.getMonth() + 1;
    this.year = now.getFullYear();
  }

  public ngAfterViewInit(): void {
    this.interval = setInterval(() => {
      const data1: any = this.echartDynamicAreaData3.series[0].data;
      const data2: any = this.echartDynamicAreaData3.series[1].data;
      data1.shift();
      data1.push(parseInt(Math.round(Math.random() * 1000).toFixed(0), 10));
      data2.shift();
      data2.push(parseInt((Math.random() * 10 + 5).toFixed(0), 10));
      this.echartDynamicAreaDataUpdate = {
        series: [
          { data: data1 },
          { data: data2 }
        ]
      };
    }, 3000);

    this.zone.runOutsideAngular(() => {
      const map = create(this.mapRef.nativeElement, MapChart);
      map.geodata = am4geodata_usaHigh;
      map.projection = new projections.AlbersUsa();
      const polygonSeries = map.series.push(new MapPolygonSeries());
      polygonSeries.useGeodata = true;
      map.homeZoomLevel = 1.2;
      map.chartContainer.wheelable = false;
      map.seriesContainer.draggable = false;
      map.seriesContainer.events.disableType('doublehit');
      map.chartContainer.background.events.disableType('doublehit');

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
      plusButtonHoverState.properties.fill = color('#ccc');
      let minusButtonHoverState = map.zoomControl.minusButton.background.states.create('hover');
      minusButtonHoverState.properties.fill = color('#ccc');

      const polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = '{name}';
      polygonTemplate.fill = color('#fff');
      polygonTemplate.fillOpacity = 0.2;
      const hs = polygonTemplate.states.create('hover');
      hs.properties.fillOpacity = 0.5;

      polygonTemplate.strokeOpacity = 0.4;

      const citySeries = map.series.push(new MapImageSeries());
      citySeries.data = [
        {
          latitude: 40.717079,
          longitude: -74.00116,
          size: 6,
          tooltip: 'New York',
        },
        {
          latitude: 33.145235,
          longitude: -83.811834,
          size: 7,
          tooltip: 'Oconee National Forest',
        },
        {
          latitude: 37.792032,
          longitude: -122.394613,
          size: 4,
          tooltip: 'San Francisco',
        },
        {
          latitude: 26.935080,
          longitude: -80.851766,
          size: 9,
          tooltip: 'Lake Okeechobee',
        },
        {
          latitude: 36.331308,
          longitude: -83.336050,
          size: 4,
          tooltip: 'Grainger County',
        },
        {
          latitude: 36.269356,
          longitude: -76.587477,
          size: 8,
          tooltip: 'Chowan County',
        },
        {
          latitude: 30.700644,
          longitude: -95.145249,
          size: 6,
          tooltip: 'Lake Livingston',
        },
        {
          latitude: 34.546708,
          longitude: -90.211471,
          size: 5,
          tooltip: 'Tunica County',
        },
        {
          latitude: 32.628599,
          longitude: -103.675115,
          size: 5,
          tooltip: 'Lea County',
        },
        {
          latitude: 40.456692,
          longitude: -83.522688,
          size: 5,
          tooltip: 'Union County',
        },
        {
          latitude: 33.844630,
          longitude: -118.157483,
          size: 6,
          tooltip: 'Lakewood Mutual',
        }
      ];
      citySeries.dataFields.value = 'size';

      const city = citySeries.mapImages.template;
      city.nonScaling = true;
      city.propertyFields.latitude = 'latitude';
      city.propertyFields.longitude = 'longitude';
      const circle = city.createChild(Circle);
      circle.fill = color('#ffc247');
      circle.stroke = color('#ffffff');
      circle.strokeWidth = 0;
      const circleHoverState = circle.states.create('hover');
      circleHoverState.properties.strokeWidth = 1;
      circle.tooltipText = '{tooltip}';
      circle.propertyFields.radius = 'size';

      this.map = map;
    });
  }

  public ngOnDestroy(): void {
    if (this.interval) { clearInterval(this.interval); }

    this.zone.runOutsideAngular(() => {
      if (Boolean(this.map)) {
        this.map.dispose();
      }
    });
  }
}
