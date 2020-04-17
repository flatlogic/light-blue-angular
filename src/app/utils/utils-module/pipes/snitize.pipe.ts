import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  public transform(value: string): SafeHtml {
    return typeof value === 'string'
      ? this.sanitizer.bypassSecurityTrustHtml(value)
      : '';
  }
}
