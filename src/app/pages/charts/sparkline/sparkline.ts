import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import 'jquery-sparkline';

declare let jQuery: any;

@Component({
  selector: 'sparkline',
  templateUrl: './sparkline.html'
})
export class SparklineComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sparkline1', {static: true}) sparkline1: ElementRef;
  @ViewChild('sparkline2', {static: true}) sparkline2: ElementRef;
  @ViewChild('sparkline3', {static: true}) sparkline3: ElementRef;
  @ViewChild('sparkline4', {static: true}) sparkline4: ElementRef;
  @ViewChild('sparkline5', {static: true}) sparkline5: ElementRef;
  @ViewChild('sparkline6', {static: true}) sparkline6: ElementRef;
  @ViewChild('sparkline7', {static: true}) sparkline7: ElementRef;

  generateRandomArr(length, min = null, max = null, isFloat = false) { // eslint-disable-line
    const result = [];
    const maxDefault = 100;
    const minDefault = -100;
    let rand = 0;

    min = min === 0 ? 0 : (min || minDefault); // eslint-disable-line
    max = max === 0 ? 0 : (max || maxDefault); // eslint-disable-line

    for (let i = 0; i < length; i += 1) {
      rand = Math.random() * (Math.abs(result[i - 1] / 10) || 1) * [min, max][i % 2];
      rand = rand < min ? min : rand;
      result.push(isFloat ? rand : Math.round(rand));
    }

    return result;
  }

  initSparkline1() {
    jQuery(this.sparkline1.nativeElement).sparkline(this.generateRandomArr(80, -150), {
      type: 'bar',
      height: '140px',
      width: '100%',
      barWidth: 6,
      barSpacing: 3,
      barColor: '#ffebb2',
      negBarColor: '#f59f9f',
    });

    // Chrome and Safari fix for to set correct width to chart
    jQuery(this.sparkline1.nativeElement).find('canvas').css({width: jQuery(this.sparkline1.nativeElement).width()});
  }

  initSparkline2() {
    jQuery(this.sparkline2.nativeElement).sparkline(this.generateRandomArr(6, 4, 15), {
      type: 'pie',
      width: '200px',
      height: '200px',
      sliceColors: ['#ffd7de', '#8fe5d4', '#ace5d1', '#ffebb2', '#fff8e3'],
      highlightLighten: 1.05,
    });
  }

  initSparkline3() {
    jQuery(this.sparkline3.nativeElement).sparkline(this.generateRandomArr(5), {
      width: '100%',
      fillColor: '#ffebb2',
      height: '100px',
      lineColor: 'transparent',
      spotColor: '#c0d0f0',
      minSpotColor: null,
      maxSpotColor: null,
      highlightSpotColor: '#ddd',
      highlightLineColor: '#ddd',
    }).sparkline(this.generateRandomArr(7), {
      composite: true,
      lineColor: 'transparent',
      spotColor: '#c0d0f0',
      fillColor: '#ace5d1',
      minSpotColor: null,
      maxSpotColor: null,
      highlightSpotColor: '#ddd',
      highlightLineColor: '#ddd',
    });
  }

  initSparkline4() {
    jQuery(this.sparkline4.nativeElement).sparkline(this.generateRandomArr(10, 10, 30), {
      type: 'line',
      width: '100%',
      height: '200px',
      lineColor: '#a7beff',
      fillColor: '#d1dcff',
      lineWidth: 2,
      spotColor: '#547fff',
      minSpotColor: '#fdf7e6',
      maxSpotColor: '#f55d5d',
      highlightSpotColor: '#547fff',
      highlightLineColor: '#ffffff',
      spotRadius: 1,
      chartRangeMin: 5,
      chartRangeMax: 7,
      normalRangeColor: '#547fff',
      drawNormalOnTop: true,
    });
  }

  initSparkline5() {
    jQuery(this.sparkline5.nativeElement).sparkline(this.generateRandomArr(2, 8, 15), {
      type: 'pie',
      width: '100px',
      height: '100px',
      sliceColors: ['#f59f9f', '#ffd7de'],
      highlightLighten: 1.1,
    });
  }

  initSparkline6() {
    jQuery(this.sparkline6.nativeElement).sparkline(this.generateRandomArr(102, -1, 1), {
      type: 'tristate',
      height: '100px',
      width: '100%',
      posBarColor: '#ffebb2',
      negBarColor: '#b7b3ff',
      zeroBarColor: '#d6dee5',
      barWidth: 5,
      barSpacing: 3,
      zeroAxis: true,
    });

    // Chrome and Safari fix for to set correct width to chart
    jQuery(this.sparkline6.nativeElement).find('canvas').css({width: jQuery(this.sparkline6.nativeElement).width()});
  }

  initSparkline7() {
    jQuery(this.sparkline7.nativeElement).sparkline(this.generateRandomArr(15, 10, 100, true), {
      width: '100%',
      height: '200px',
      lineColor: '#547fff',
      fillColor: false,
    });
  }

  initCharts() {
    this.initSparkline1();
    this.initSparkline2();
    this.initSparkline3();
    this.initSparkline4();
    this.initSparkline5();
    this.initSparkline6();
    this.initSparkline7();
  }

  ngAfterViewInit() {
    this.initCharts();

    window.addEventListener('resize', this.initCharts);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.initCharts);
  }
}
