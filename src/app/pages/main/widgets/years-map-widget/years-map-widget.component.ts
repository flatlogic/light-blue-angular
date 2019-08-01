import {Component, OnInit} from '@angular/core';
import { FakeWorldData } from './fake-world-data.service';
declare let jQuery: any;

@Component({
  selector: '[years-map-widget]',
  templateUrl: './years-map-widget.template.html',
})

export class YearsMapWidgetComponent implements OnInit {
  selectedYear: number;
  data: any;
  fakeWorldData: any;
  zoom: Array<any>;

  constructor (fakeWorld: FakeWorldData) {
    this.fakeWorldData = fakeWorld.getFakeWorldData();
    this.selectedYear = 2009;
  }

  triggerYear(year): void {
    this.selectedYear = year;
    const $map = jQuery('[mapael-layers-map]');
    $map.trigger('update', [this.fakeWorldData[year], {}, {}, {animDuration : 300}]);
  }

  ngOnInit(): void {
    /* tslint:disable */
    this.data = {
      map: {
        name : 'world_countries',
        defaultArea : {
          attrs : {
            fill: '#eee', // gray-lighter
            stroke: '#666', // 'gray'
            "stroke-width" : .1
          },
          attrsHover : {
            fill: '#999', // gray-light,
            animDuration: 100,
          }
        },
        defaultPlot: {
          size: 17,
          attrs : {
            fill: '#f0b518', // brand-warning,
            stroke: '#fff',
            "stroke-width" : 0,
            "stroke-linejoin" : 'round'
          },
          attrsHover : {
            "stroke-width" : 1,
            animDuration : 100
          }
        },
        zoom : {
          enabled : true,
          step : 1,
          maxLevel: 10,
          mousewheel: false
        }
      },
      legend : {
        area : {
          display : false,
          slices : [
            {
              max : 5000000,
              attrs : {
                fill: 'rgb(245, 249, 251)', // lightenColor('#ebeff1', .04)
              },
              label :'Less than 5M'
            },
            {
              min :5000000,
              max :10000000,
              attrs : {
                fill : '#ebeff1'
              },
              label :'Between 5M and 10M'
            },
            {
              min :10000000,
              max :50000000,
              attrs : {
                fill: '#eee', // gray-lighter
              },
              label :'Between 10M and 50M'
            },
            {
              min :50000000,
              attrs : {
                fill: 'rgb(209, 213, 215)', // darkenColor('#ebeff1', .1)
              },
              label :'More than 50M'
            }
          ]
        }
      },
      areas: this.fakeWorldData[this.selectedYear]['areas']
    };
    let coords = jQuery.fn.mapael.maps['world_countries'].getCoords(59.599254, 8.863224);
    /* tslint:enable */
    this.zoom = [6, coords.x, coords.y];
  }
}
