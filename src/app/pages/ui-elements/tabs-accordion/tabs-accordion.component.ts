import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: '[ui-tabs-accordion]',
  templateUrl: './tabs-accordion.template.html',
  styleUrls: ['./tabs-accordion.style.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsAccordionComponent {
}
