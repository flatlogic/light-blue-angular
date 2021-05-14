import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import { defaultData, groupedData, simpleOptions, fromOneToThree, fromFourToSix, fromSevenToTen, defaultMarkdownEditorContent } from './elements.data';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: '[elements]',
  templateUrl: './elements.template.html',
  styleUrls: ['./elements.style.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true
})
export class ElementsComponent {
  date: Date = new Date(2021, 5, 10);
  selected: any;
  phoneMask = '(000) 000-0000';
  interPhoneMask = '+000 000 0000 0000';
  dateMask = '00-00-0000';
  timeMask = '00:00';

  phoneValue = '';
  interPhoneValue = '';
  dateValue = '';
  timeValue = '';

  public defaultOptions: NgOption[] = defaultData;
  public groupedOptions: NgOption[] = groupedData;
  public color: string = '#f0b518';
  public markdownEditorContent: string = defaultMarkdownEditorContent;
  public selectedItem: string;
  public readonly typesDropdownOptions: string[] = ['Another type', 'Type one', 'Next type'];
  public selecetedType = this.typesDropdownOptions[0];
  public readonly simpleOptions: NgOption[] = simpleOptions;
  public selectedSimpleOption: NgOption = this.simpleOptions[0];
  public readonly fromOneToThree: NgOption[] = fromOneToThree;
  public readonly fromFourToSix: NgOption[] = fromFourToSix;
  public readonly fromSevenToTen: NgOption[] = fromSevenToTen;
  public selectedNumber: NgOption = fromOneToThree[0];
  public selectedNumber2: NgOption = fromFourToSix[0];
  public selectedNumber3: NgOption = fromSevenToTen[0];

  unmask(event) {
    return event.replace(/\D+/g, '');
  }

  public onValueChange(model: NgOption | undefined): void {
    this.selected = Boolean(model) ? model.id : model;
  }

  public onTypeChange(e: Event, newValue: string): void {
    e.preventDefault();
    // this.selecetedType = newValue;
  }

  public onNumberChange(e: Event, newValue: string): void {
    e.preventDefault();
    // this.selectedNumber = newValue;
  }

  public onNumberChange2(e: Event, newValue: string): void {
    e.preventDefault();
    // this.selectedNumber2 = newValue;
  }

  public onNumberChange3(e: Event, newValue: string): void {
    e.preventDefault();
    // this.selectedNumber3 = newValue;
  }
}
