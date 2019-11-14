import { Component, Input } from '@angular/core';

@Component({
  selector: '[nasdaq-widget]',
  template: `
  <div echarts [style.height]="height" [options]="options"></div>
  `
})

export class NasdaqWidgetComponent {
  @Input() public options: any;
  @Input() public height: string = '80px';
}
