import { Component, ChangeDetectionStrategy } from '@angular/core';

import * as Highstock from 'highcharts/highstock';
import * as Highcharts from 'highcharts';
const IndicatorsCore = require('highcharts/indicators/indicators');
IndicatorsCore(Highstock);
const IndicatorZigZag = require('highcharts/indicators/zigzag');
IndicatorZigZag(Highstock);
const variablepie = require('highcharts/modules/variable-pie');
variablepie(Highcharts);
const sunburst = require('highcharts/modules/sunburst');
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
