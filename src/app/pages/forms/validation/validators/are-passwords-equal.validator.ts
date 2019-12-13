import { AbstractControl, ValidationErrors } from '@angular/forms';

export function arePasswordsEqual(control: AbstractControl): ValidationErrors | null {
  const passwordControl = control.get('password');
  const repeatPasswordControl = control.get('repeatPassword');

  return (
    passwordControl
    && repeatPasswordControl
    && passwordControl.value !== null
    && repeatPasswordControl.value !== null
    && passwordControl.value.toString() === repeatPasswordControl.value.toString())
    ? null
    : { passwordsMismatch: true };
}
