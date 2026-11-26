import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  SecurityContext,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { defaultData, groupedData, simpleOptions, fromOneToThree, fromFourToSix, fromSevenToTen, defaultMarkdownEditorContent } from './elements.data';
import { DomSanitizer } from '@angular/platform-browser';
import EasyMDE from 'easymde';
import Dropzone from 'dropzone';
import 'trix';

@Component({
  standalone: false,
  selector: '[elements]',
  templateUrl: './elements.template.html',
  styleUrls: ['./elements.style.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true
})
export class ElementsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('markdownInput') private markdownInput: ElementRef<HTMLTextAreaElement>;
  @ViewChild('uploadArea') private uploadArea: ElementRef<HTMLFormElement>;
  private markdown: EasyMDE;
  private dropzone: Dropzone;

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    this.markdown = new EasyMDE({
      element: this.markdownInput.nativeElement,
      initialValue: defaultMarkdownEditorContent,
      spellChecker: false,
      autoDownloadFontAwesome: false,
      renderingConfig: {sanitizerFunction: html => this.sanitizer.sanitize(SecurityContext.HTML, html) || ''}
    });
    this.dropzone = new Dropzone(this.uploadArea.nativeElement, {url: 'https://httpbin.org/post'});
  }

  ngOnDestroy(): void {
    this.markdown.toTextArea();
    this.markdown.cleanup();
    this.dropzone.destroy();
  }

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

  public defaultOptions = defaultData;
  public groupedOptions = groupedData;
  public color: string = '#f0b518';
  public selectedItem: string;
  public readonly typesDropdownOptions: string[] = ['Another type', 'Type one', 'Next type'];
  public selecetedType = this.typesDropdownOptions[0];
  public readonly simpleOptions = simpleOptions;
  public selectedSimpleOption = this.simpleOptions[0];
  public readonly fromOneToThree = fromOneToThree;
  public readonly fromFourToSix = fromFourToSix;
  public readonly fromSevenToTen = fromSevenToTen;
  public selectedNumber = fromOneToThree[0];
  public selectedNumber2 = fromFourToSix[0];
  public selectedNumber3 = fromSevenToTen[0];

  unmask(event) {
    return event.replace(/\D+/g, '');
  }

  public onValueChange(model: {id: string} | undefined): void {
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
