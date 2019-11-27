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
} from '../../../utils/highcharts.data';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighchartsComponent {
  Highstock = Highstock;
  Highcharts = Highcharts;
  highchartsOptions1 = highchartsOptions1;
  highchartsOptions2 = highchartsOptions2;
  highchartsOptions3 = highchartsOptions3;
  highchartsOptions4 = highchartsOptions4;
  highchartsOptions5 = highchartsOptions5;
  highchartsOptions6 = highchartsOptions6;
}
