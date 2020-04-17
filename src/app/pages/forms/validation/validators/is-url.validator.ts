import { AbstractControl, ValidationErrors } from '@angular/forms';
import isURL from 'validator/es/lib/isURL';

export function isURLValidator(control: AbstractControl): ValidationErrors | null {
  return typeof control.value === 'string'
    ? isURL(control.value)
      ? null
      : { invalidURL: true }
    : { invalidURL: true };
}
