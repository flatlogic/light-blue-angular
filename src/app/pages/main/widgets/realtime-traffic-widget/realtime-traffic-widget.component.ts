import { Component, ViewEncapsulation } from '@angular/core';
declare let Rickshaw: any;

@Component({
  selector: '[realtime-traffic-widget]',
  templateUrl: './realtime-traffic-widget.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../../../node_modules/rickshaw/rickshaw.css']
})

export class RealtimeTrafficWidgetComponent {
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
        color: '#343434',
        data: this.seriesData[0],
        name: 'Uploads'
      }, {
        color: '#666',
        data: this.seriesData[1],
        name: 'Downloads'
      }
    ];
  }
}
