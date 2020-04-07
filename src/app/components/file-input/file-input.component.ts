import { Component, ChangeDetectionStrategy, ContentChild, AfterContentInit, AfterContentChecked, ElementRef, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, fromEvent, merge, Subject } from 'rxjs';
import { map, startWith, mapTo, shareReplay } from 'rxjs/operators';

import { FileInputHintDirective } from './directives/file-input-hint.directive';
import { FileInputLabelDirective } from './directives/file-input-label.directive';
import { FileInputDirective } from './directives/file-input.directive';

@Component({
  selector: 'file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileInputComponent implements AfterContentInit, AfterContentChecked {
  @Input() public preview: boolean = false;
  @Input() public selectCaption: string = 'Select File';
  @Input() public changeCaption: string = 'Change';
  @Input() public removeCaption: string = 'Remove';

  @ContentChild(FileInputLabelDirective) public label: FileInputLabelDirective;
  @ContentChild(FileInputHintDirective) public hint: FileInputHintDirective;
  @ContentChild(FileInputDirective) public fileInput: FileInputDirective;
  @ContentChild(FileInputDirective, { read: ElementRef }) public fileInputRef: ElementRef<HTMLInputElement>;

  public fileName$: Observable<string>;
  public file$: Observable<SafeUrl>;

  private reader: FileReader = new FileReader();
  private resetFileSource: Subject<void> = new Subject();

  constructor(private sanitizer: DomSanitizer) { }

  public ngAfterContentInit(): void {
    this.validateControl();

    this.fileName$ = merge(
      this.fileInput.reset.pipe(mapTo(null)),
      fromEvent(this.fileInputRef.nativeElement, 'input').pipe(
        map((event: InputEvent) => {
          const file: File = (event.target as HTMLInputElement).files[0];
          if (file) {
            if (typeof file.type !== 'undefined' ? file.type.match(/^image\/(gif|png|jpeg|svg\+xml)$/) : file.name.match(/\.(gif|png|jpe?g|svg)$/i)) {
              this.reader.readAsDataURL((event.target as HTMLInputElement).files[0]);
            } else {
              this.resetFileSource.next();
            }
          } else {
            this.resetFileSource.next();
          }
          return Boolean(file) ? file.name : '';
        }),
      ),
    ).pipe(startWith(''), shareReplay(1));

    this.file$ = merge(
      merge(
        this.resetFileSource.asObservable(),
        this.fileInput.reset.asObservable()
      ).pipe(mapTo(null)),
      fromEvent(this.reader, 'load').pipe(
        map((event: ProgressEvent<FileReader>) => {
          return this.sanitizer.bypassSecurityTrustUrl(event.target.result as string);
        }),
      )
    ).pipe(shareReplay(1));
  }

  public ngAfterContentChecked(): void {
    this.validateControl();
  }

  public onSelect(): void {
    this.fileInput.open();
  }

  public onChange(): void {
    this.fileInput.open();
  }

  public onRemove(): void {
    this.fileInput.onReset();
  }

  private validateControl(): void {
    if (!Boolean(this.fileInput)) {
      throw new Error('file-input must contain a FileInputControl.');
    }
  }
}
