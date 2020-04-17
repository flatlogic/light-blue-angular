import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: '[realtime-traffic-widget]',
  templateUrl: './realtime-traffic-widget.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: []
})

export class RealtimeTrafficWidgetComponent {
  @Input() public options: any;
  @Input() public merge: any;
}
