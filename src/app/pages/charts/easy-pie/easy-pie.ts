import { AfterViewInit, Component } from '@angular/core';
import 'easy-pie-chart/dist/jquery.easypiechart.js';

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

declare let jQuery: any;

@Component({
  selector: 'easy-pie',
  templateUrl: './easy-pie.html'
})
export class EasyPieComponent implements AfterViewInit {
  Highstock = Highstock;
  Highcharts = Highcharts;
  highchartsOptions1 = highchartsOptions1;
  highchartsOptions2 = highchartsOptions2;
  highchartsOptions3 = highchartsOptions3;
  highchartsOptions4 = highchartsOptions4;
  highchartsOptions5 = highchartsOptions5;
  highchartsOptions6 = highchartsOptions6;


  initCharts() {
    jQuery('#easy-pie1').easyPieChart({
      barColor: '#8fe5d4',
      trackColor: '#f8f9fa',
      scaleColor: false,
      lineWidth: 10,
      size: 120,
    });

    jQuery('#easy-pie2').easyPieChart({
      barColor: '#ffd7de',
      trackColor: '#f8f9fa',
      scaleColor: '#f55d5d',
      lineCap: 'butt',
      lineWidth: 22,
      size: 140,
      animate: 1000,
    });

    jQuery('#easy-pie3').easyPieChart({
      barColor: '#ffebb2',
      trackColor: '#f8f9fa',
      scaleColor: '#ffc247',
      lineCap: 'butt',
      lineWidth: 22,
      size: 140,
      animate: 1000,
    });

    jQuery('#easy-pie4').easyPieChart({
      barColor: '#b7b3ff',
      trackColor: false,
      scaleColor: '#6c757d',
      lineCap: 'square',
      lineWidth: 10,
      size: 120,
      animate: 1000,
    });
  }

  ngAfterViewInit() {
    this.initCharts();
  }
}
