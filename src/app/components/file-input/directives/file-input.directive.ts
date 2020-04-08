import { Directive, ElementRef, Output, EventEmitter, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[type="file"][fileInput]',
})
export class FileInputDirective {
  @Output() public reset: EventEmitter<void> = new EventEmitter();

  constructor(
    private elementRef: ElementRef<HTMLInputElement>,
    @Optional() @Self() public ngControl: NgControl,
  ) { }

  public open(): void {
    this.elementRef.nativeElement.click();
  }

  public onReset(): void {
    if (this.ngControl) {
      this.ngControl.reset();
    } else {
      this.elementRef.nativeElement.value = '';
    }

    this.reset.emit();
  }
}

