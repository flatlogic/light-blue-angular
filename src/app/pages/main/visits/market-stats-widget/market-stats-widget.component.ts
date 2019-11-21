import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[market-stats-widget]',
  template: `<div echarts [style.height]="height" [options]="options" [merge]="merge"></div>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MarketStatsWidgetComponent {
  @Input() public options: any;
  @Input() public merge: any;
  @Input() public height: string;
}
