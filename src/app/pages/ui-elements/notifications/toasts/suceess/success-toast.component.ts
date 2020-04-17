import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';

@Component({
  selector: 'success-toast',
  templateUrl: './success-toast.component.html',
  styleUrls: ['./success-toast.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      state('removed', style({ opacity: 0 })),
      transition(
        'inactive => active',
        animate('{{ easeTime }}ms {{ easing }}')
      ),
      transition(
        'active => removed',
        animate('{{ easeTime }}ms {{ easing }}')
      )
    ])
  ],
  preserveWhitespaces: false
})
export class SuccessToastComponent extends Toast {
  constructor(protected toastrService: ToastrService, public toastPackage: ToastPackage) {
    super(toastrService, toastPackage);
  }

  public onAction(event: Event) {
    event.stopPropagation();
    this.toastPackage.triggerAction();
    return false;
  }
}
