import {Component, OnInit, ViewEncapsulation} from '@angular/core';
declare let jQuery: any;
declare let Rickshaw: any;

@Component({
  selector: '[changes-chart-widget]',
  templateUrl: './changes-chart-widget.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../../../node_modules/rickshaw/rickshaw.css']
})

export class ChangesChartWidgetComponent implements OnInit {
  series: Array<any>;
  sparklineData: Array<any>;
  sparklineOptions: Array<any>;

  applyRickshawData(): void {
    const seriesData = [ [], [] ];
    const random = new Rickshaw.Fixtures.RandomData(10000);

    for (let i = 0; i < 32; i++) {
      random.addData(seriesData);
    }

    this.series = [{
      name: 'pop',
      data: seriesData.shift().map(function(d): Object { return { x: d.x, y: d.y }; }),
      /* tslint:disable */
      color: '#7bd47a',
      /* tslint:enable */
      renderer: 'bar'
    }, {
      name: 'humidity',
      data: seriesData.shift()
        .map(function(d): Object {
          return { x: d.x, y: d.y * (Math.random() * 0.1 + 1.1) };
        }),
      renderer: 'line',
      /* tslint:disable */
      color: '#fff'
      /* tslint:enable */
    }];
  }

  applySparklineData(): void {
    const data = [3, 6, 2, 4, 5, 8, 6, 8],
      dataMax = Math.max.apply(null, data),
      backgroundData = data.map(function(): number { return dataMax; });

    this.sparklineData = [backgroundData, data];
    this.sparklineOptions = [{
      type: 'bar',
      height: 26,
      barColor: '#eee',
      barWidth: 7,
      barSpacing: 5,
      chartRangeMin: Math.min.apply(null, data),
      tooltipFormat: new jQuery.SPFormatClass('')
    },
      {
      composite: true,
      type: 'bar',
      barColor: '#64bd63',
      barWidth: 7,
      barSpacing: 5
    }];
  }

  ngOnInit(): void {
    this.applyRickshawData();
    this.applySparklineData();
  }
}
