import { Component } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: '[flot-chart-widget]',
  templateUrl: './flot-chart-widget.template.html',
})

export class FlotChartWidgetComponent {
  generateRandomData(labels): Array<any> {
    function random(): number {
      return (Math.floor(Math.random() * 30)) + 10;
    }

    const data = [];
    let maxValueIndex = 5;

    for (let i = 0; i < labels.length; i++) {
      const randomSeries = [];
      for (let j = 0; j < 25; j++) {
        randomSeries.push([j, Math.floor(maxValueIndex * j) + random()]);
      }
      maxValueIndex--;
      data.push({
        data: randomSeries,
        showLabels: true,
        label: labels[i].label,
        labelPlacement: 'below',
        canvasRender: true,
        cColor: 'red',
        color: labels[i].color
      });
    }
    return data;
  }
}
