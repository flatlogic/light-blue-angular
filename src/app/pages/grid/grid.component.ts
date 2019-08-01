import {Component, OnInit, ViewEncapsulation} from '@angular/core';
declare let jQuery: any;

@Component({
  selector: '[grid]',
  templateUrl: './grid.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./grid.style.scss']
})
export class GridComponent implements OnInit {
  sortOptions: Object = {
    connectWith: '.widget-container',
    handle: 'header, .handle',
    cursor: 'move',
    iframeFix: false,
    items: '.widget:not(.locked)',
    opacity: 0.8,
    helper: 'original',
    revert: true,
    forceHelperSize: true,
    placeholder: 'widget widget-placeholder',
    forcePlaceholderSize: true,
    tolerance: 'pointer'
  };

  ngOnInit(): void {
    jQuery('.widget-container').sortable(this.sortOptions);
  }
}
