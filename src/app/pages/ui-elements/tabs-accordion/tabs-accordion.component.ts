import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';


@Component({
  standalone: false,
  selector: '[ui-tabs-accordion]',
  templateUrl: './tabs-accordion.template.html',
  styleUrls: ['./tabs-accordion.style.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsAccordionComponent {
}
