import {
  Component, ViewEncapsulation, Injector, OnInit,
  OnDestroy
} from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { ɵDomSharedStylesHost } from '@angular/platform-browser';
import * as data from './elements.data';
declare const jQuery: any;

@Component({
  selector: '[elements]',
  templateUrl: './elements.template.html',
  styleUrls: [ './elements.style.scss' ],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true
})
export class ElementsComponent implements OnInit, OnDestroy {
  date: Date = new Date(2016, 5, 10);
  colorOptions: Object = {color: '#f0b518'};
  injector: Injector;
  domSharedStylesHost: any;
  selected: any;
  select2Options: any = {
    theme: 'bootstrap'
  };

  phoneMask = {
    mask: ['(', /[1-9]/, /\d/, /\d/, ')',
      ' ', /\d/, /\d/, /\d/,
      '-', /\d/, /\d/, /\d/, /\d/]
  };

  interPhoneMask = {
    mask: ['+', /[1-9]/, /\d/, /\d/,
      ' ', /\d/, /\d/, /\d/,
      ' ', /\d/, /\d/, /\d/, /\d/,
      ' ', /\d/, /\d/, /\d/, /\d/]
  };

  dateMask = {
    mask: [/\d/, /\d/,
      '-', /\d/, /\d/,
      '-', /[1-9]/, /\d/, /\d/, /\d/]
  };

  timeMask = {
    mask: [/\d/, /\d/,
      ':', /\d/, /\d/]
  };

  phoneValue = '';
  interPhoneValue = '';
  dateValue = '';
  timeValue = '';

  constructor(injector: Injector) {
    //
    // This is a hack on angular style loader to prevent ng2-select2 from adding its styles.
    // They are hard-coded into the component, so there are no other way to get rid of them
    //
    this.domSharedStylesHost = injector.get(ɵDomSharedStylesHost);
    this.domSharedStylesHost.__onStylesAdded__ = this.domSharedStylesHost.onStylesAdded;
    this.domSharedStylesHost.onStylesAdded = (additions) => {
      const style = additions[0];
      if (!style || !style.trim().startsWith('.select2-container')) {
        this.domSharedStylesHost.__onStylesAdded__(additions);
      }
    };
  }

  ngOnInit(): void {
    jQuery('#markdown-editor').markdown();
    jQuery('.js-slider').slider();
    jQuery('#colorpicker').colorpicker(this.colorOptions);
    jQuery('.selectpicker').selectpicker();
  }

  unmask(event) {
    return event.replace(/\D+/g, '');
  }

  getSelect2DefaultList(): Select2OptionData[] {
    return data.select2DefaultData;
  }

  getSelect2GroupedList(): Select2OptionData[] {
    return data.select2GroupedData;
  }

  select2Changed(e: any): void {
    this.selected = e.value;
  }

  ngOnDestroy(): void {
    // detach custom hook
    this.domSharedStylesHost.onStylesAdded = this.domSharedStylesHost.__onStylesAdded__;
  }
}
