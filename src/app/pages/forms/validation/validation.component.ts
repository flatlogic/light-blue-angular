import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isURLValidator } from './validators/is-url.validator';
import { arePasswordsEqual } from './validators/are-passwords-equal.validator';

@Component({
  selector: '[forms-validation]',
  templateUrl: './validation.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./validation.style.scss']
})
export class ValidationComponent implements OnInit {
  public form: FormGroup;
  public submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  public ngOnInit() {
    this.form = this.fb.group({
      req: [null, Validators.required],
      min: [null, [Validators.required, Validators.minLength(10)]],
      email: ['John', Validators.email],
      number: [null, [Validators.required, Validators.pattern(/^-?\d+\.?\d*$/)]],
      range: [null, [Validators.required, Validators.pattern(/^-?\d+\.?\d*$/), Validators.min(10), Validators.max(100)]],
      passwords: this.fb.group({
        password: ['123', [Validators.required, Validators.minLength(6)]],
        repeatPassword: [null, Validators.required]
      }, { validator: arePasswordsEqual }),
      url: [null, [Validators.required, isURLValidator]]
    });
  }

  public onSubmit(): void {
    this.submitted = true;
  }

  public onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
