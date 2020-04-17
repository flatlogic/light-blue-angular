import { Component, ChangeDetectionStrategy } from '@angular/core';

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
export class HighchartsComponent {
  Highstock = Highstock;
  Highcharts = Highcharts;
  public highchartsOptions1: any = highchartsOptions1;
  public highchartsOptions2: any = highchartsOptions2;
  public highchartsOptions3: any = highchartsOptions3;
  public highchartsOptions4: any = highchartsOptions4;
  public highchartsOptions5: any = highchartsOptions5;
  public highchartsOptions6: any = highchartsOptions6;
}
