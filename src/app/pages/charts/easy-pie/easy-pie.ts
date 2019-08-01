import {AfterViewInit, Component} from '@angular/core';
import 'easy-pie-chart/dist/jquery.easypiechart.js';

declare let jQuery: any;

@Component({
  selector: 'easy-pie',
  templateUrl: './easy-pie.html'
})
export class EasyPieComponent implements AfterViewInit {
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
