import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { apexOptions4, apexOptions5, apexOptions6, apexOptions7, apexOptions8, apexOptions9 } from '../../../utils/apex-charts.data';

declare let jQuery: any;

import 'jquery-flot/jquery.flot';
import 'jquery-flot/jquery.flot.time';
import 'jquery-flot/jquery.flot.resize';
import 'jquery.flot.animator/jquery.flot.animator';
import 'jquery-flot/jquery.flot.crosshair';
import 'jquery-flot/jquery.flot.symbol';
import 'jquery-flot/jquery.flot.selection';
import 'jquery-flot/jquery.flot.pie';
import 'jquery.flot-orderBars/js/jquery.flot.orderBars';
import 'jquery-sparkline';

@Component({
  selector: 'flot',
  templateUrl: './flot.html'
})
export class FlotComponent implements AfterViewInit {
  @ViewChild('sparklines1', { static: true }) sparklines1: ElementRef;
  @ViewChild('sparklines2', { static: true }) sparklines2: ElementRef;

  public apexOptions5 = apexOptions5;
  public apexOptions6 = apexOptions6;
  public apexOptions4 = apexOptions4;
  public apexOptions7 = apexOptions7;
  public apexOptions8 = apexOptions8;
  public apexOptions9 = apexOptions9;

  initSparkline(ref) {
    const spark = jQuery(this[ref].nativeElement);
    spark.sparkline('html', spark.data());
  }

  ngAfterViewInit() {
    this.initSparkline('sparklines1');
    this.initSparkline('sparklines2');
  }
}
