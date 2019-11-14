import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: '[changes-chart-widget]',
  templateUrl: './changes-chart-widget.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: []
})

export class ChangesChartWidgetComponent {
  @Input() public mainData: any;
  @Input() public changesData: any;
}
