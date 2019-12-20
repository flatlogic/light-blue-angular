import {
  Component,
  ViewEncapsulation,
  OnInit
} from '@angular/core';
import { defaultData, groupedData } from './elements.data';
import { NgOption } from '@ng-select/ng-select';
declare const jQuery: any;

@Component({
  selector: '[elements]',
  templateUrl: './elements.template.html',
  styleUrls: ['./elements.style.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true
})
export class ElementsComponent implements OnInit {
  date: Date = new Date(2016, 5, 10);
  colorOptions: Object = { color: '#f0b518' };
  selected: any;

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

  public defaultOptions: NgOption[] = defaultData;
  public groupedOptions: NgOption[] = groupedData;

  ngOnInit(): void {
    jQuery('#markdown-editor').markdown();
    jQuery('.js-slider').slider();
    jQuery('#colorpicker').colorpicker(this.colorOptions);
    jQuery('.selectpicker').selectpicker();
  }

  unmask(event) {
    return event.replace(/\D+/g, '');
  }

  public onValueChange(model: NgOption | undefined): void {
    this.selected = Boolean(model) ? model.id : model;
  }
}
