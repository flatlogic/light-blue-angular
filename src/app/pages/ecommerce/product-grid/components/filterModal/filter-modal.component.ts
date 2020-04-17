import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.template.html',
  styleUrls: ['./filter-modal.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterModalComponent implements OnChanges {
  @Input() public title: string = '';
  @Input() public data: any = {};

  subMenu: boolean = false;
  _menu: any = {};

  @Output() onClose: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    this._menu = changes.data.currentValue;
  }

  handleCloseClick() {
    this.onClose.emit(true);
  }

  handleBackClick() {
    this._menu = this.data;
    this.subMenu = false;
  }

  checkFilter(name) {
    this._menu.checked = name;
  }

  selectFilterType(filter) {
    this._menu = filter;
    this.subMenu = true;
  }
}
