import { Component, ViewEncapsulation } from '@angular/core';
declare let Rickshaw: any;

@Component({
  selector: '[market-stats-widget]',
  template: '<div class="chart-overflow-bottom"' +
  ' rickshaw-chart [series]="series" ' +
  '[height]="100" [seriesData]="seriesData"' +
  ' [random]="random" [realtime]="true">' +
  '</div>',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../../../node_modules/rickshaw/rickshaw.css']
})

export class MarketStatsWidgetComponent {
  seriesData: Array<any> = [ [], [] ];
  random: any;
  series: Array<any>;

  constructor() {
      this.random = new Rickshaw.Fixtures.RandomData(30);

     for (let i = 0; i < 30; i++) {
       this.random.addData(this.seriesData);
     }
     this.series = [
       {
         color: '#F7653F',
         data: this.seriesData[0],
         name: 'Uploads'
       }, {
         color: '#F7D9C5',
         data: this.seriesData[1],
         name: 'Downloads'
       }
     ];
  }
}
