import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NgWizardConfig, THEME, NgWizardService } from 'ng-wizard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { countries } from './countries';

@Component({
  selector: '[forms-wizard]',
  templateUrl: './wizard.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./wizard.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardComponent implements OnInit {
  public config: NgWizardConfig = {
    selected: 0,
    theme: THEME.default,
    toolbarSettings: {
      showNextButton: false,
      showPreviousButton: false
    }
  };

  public countries: string[] = countries;



  public form: FormGroup;
  public firstStepSubmited: boolean = false;
  public secondStepSubmited: boolean = false;
  public thirdStepSubmited: boolean = false;

  public destindationMask = {
    mask: [/[1-9]/, /\d/, /\d/, /\d/, /\d/]
  };

  public creditMask = {
    mask: [/[1-9]/, /\d/, /\d/, /\d/, '-',
      /\d/, /\d/, /\d/, /\d/, '-',
      /\d/, /\d/, /\d/, /\d/, '-',
      /\d/, /\d/, /\d/, /\d/
    ]
  };

  constructor(
    private ngWizardService: NgWizardService,
    private fb: FormBuilder
  ) { }

  unmask(event) {
    return event.replace(/\D+/g, '');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      details: this.fb.group({
        username: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
        email: [null, [Validators.required, Validators.email]],
        address: [null]
      }),
      shipping: this.fb.group({
        country: [null],
        shoppingOption: [null],
        zip: [null, Validators.required],
        address: [null]
      }),
      pay: this.fb.group({
        name: [null, Validators.required],
        cardType: [null, Validators.required],
        cardNumber: [null, Validators.required]
      })
    });
  }

  public onFirstStepSubmit(): void {
    this.firstStepSubmited = true;
    if (this.form.get('details').valid) {
      this.ngWizardService.next();
    }
  }

  public onSecondStepSubmit(): void {
    this.secondStepSubmited = true;
    if (this.form.get('shipping').valid) {
      this.ngWizardService.next();
    }
  }

  public onThirdStepSubmit(): void {
    this.thirdStepSubmited = true;
    if (this.form.get('pay').valid) {
      this.ngWizardService.next();
    }
  }

  public onShowPreviousStep(event?: Event): void {
    this.ngWizardService.previous();
  }

  public resetWizard(event?: Event): void {
    this.form.reset();
    this.firstStepSubmited = false;
    this.secondStepSubmited = false;
    this.thirdStepSubmited = false;
    this.ngWizardService.reset();
  }
}
