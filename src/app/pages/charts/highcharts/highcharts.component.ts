import { Component, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import * as Highstock from 'highcharts/highstock';
import * as Highcharts from 'highcharts';
import IndicatorsCore from 'highcharts/indicators/indicators';
IndicatorsCore(Highstock);
import IndicatorZigZag from 'highcharts/indicators/zigzag';
IndicatorZigZag(Highstock);
import variablepie from 'highcharts/modules/variable-pie';
variablepie(Highcharts);
import sunburst from 'highcharts/modules/sunburst';
sunburst(Highcharts);

import {
  highchartsOptions1,
  highchartsOptions2,
  highchartsOptions3,
  highchartsOptions4,
  highchartsOptions5,
  highchartsOptions6
} from '../../../utils/data/highcharts.data';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighchartsComponent implements AfterViewInit {
  Highstock = Highstock;
  Highcharts = Highcharts;
  highchartsOptions1: any;
  highchartsOptions2: any;
  highchartsOptions3: any;
  highchartsOptions4: any;
  highchartsOptions5: any;
  highchartsOptions6: any;

  constructor(private cdr: ChangeDetectorRef) { }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.highchartsOptions1 = highchartsOptions1;
      this.highchartsOptions2 = highchartsOptions2;
      this.highchartsOptions3 = highchartsOptions3;
      this.highchartsOptions4 = highchartsOptions4;
      this.highchartsOptions5 = highchartsOptions5;
      this.highchartsOptions6 = highchartsOptions6;
      this.cdr.markForCheck();
    });
  }
}
