import {Component, OnInit, ViewEncapsulation} from '@angular/core';

declare let jQuery: any;

@Component({
  selector: '[ui-tabs-accordion]',
  templateUrl: './tabs-accordion.template.html',
  styleUrls: ['./tabs-accordion.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsAccordionComponent implements OnInit {
  ngOnInit(): void {
    jQuery('.nav-tabs').on('shown.bs.tab', 'a', (e) => {
      if (e.relatedTarget) {
        jQuery(e.relatedTarget).removeClass('active');
      }
    });
  }
}

