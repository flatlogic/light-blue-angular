import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  OnDestroy,
  NgZone,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { useTheme, create, color, Circle, MouseCursorStyle } from '@amcharts/amcharts4/core';
import { MapChart, MapPolygonSeries, projections, ZoomControl, MapImageSeries } from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_usaHigh from '@amcharts/amcharts4-geodata/usaHigh';
import { CalendarEvent } from 'angular-calendar';


import { echartDynamicAreaData3 } from '../../../utils/echarts.data';
import { getRandomInt } from '../../../utils/randomizer';
import { calendarEvents } from '../../../utils/calendar-events.data';
import {citySeries as citySeriesData} from '../../../utils/city-series.data';

useTheme(am4themes_animated);
@Component({
  selector: 'visits',
  templateUrl: './visits.template.html',
  styleUrls: ['./visits.style.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitsComponent implements OnInit, AfterViewInit, OnDestroy {
  private interval: any;
  private progressBarValueSource1: BehaviorSubject<number> = new BehaviorSubject(0);
  private progressBarValueSource2: BehaviorSubject<number> = new BehaviorSubject(0);
  private progressBarValueSource3: BehaviorSubject<number> = new BehaviorSubject(0);

  month: any;
  year: any;
  public echartDynamicAreaData3: any = echartDynamicAreaData3;
  public echartDynamicAreaDataUpdate: any;
  public map: MapChart;
  public countUpOptions = {
    separator: ' '
  };
  public progressBarValue1$: Observable<number> = this.progressBarValueSource1.asObservable();
  public progressBarValue2$: Observable<number> = this.progressBarValueSource2.asObservable();
  public progressBarValue3$: Observable<number> = this.progressBarValueSource3.asObservable();
  public viewDate: Date = new Date();
  public events: CalendarEvent[] = [...calendarEvents];

  @ViewChild('map', { static: false }) public mapRef: ElementRef<HTMLElement>;

  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    const now = new Date();
    this.month = now.getMonth() + 1;
    this.year = now.getFullYear();
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.progressBarValueSource1.next(getRandomInt());
      this.progressBarValueSource2.next(getRandomInt());
      this.progressBarValueSource3.next(getRandomInt());
    });

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
      this.cdr.markForCheck();
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
      citySeries.data = citySeriesData;
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
    if (Boolean(this.interval)) { clearInterval(this.interval); }

    this.zone.runOutsideAngular(() => {
      if (Boolean(this.map)) {
        this.map.dispose();
      }
    });
  }

  public onEventClick({ event, sourceEvent }: { event: CalendarEvent; sourceEvent: MouseEvent | KeyboardEvent; }): void {
    if (Array.isArray(event.actions)) {
      event.actions.forEach(a => {
        a.onClick({ event, sourceEvent });
      });
    }
  }
}
