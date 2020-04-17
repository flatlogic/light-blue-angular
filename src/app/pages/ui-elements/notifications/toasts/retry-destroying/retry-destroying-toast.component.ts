import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';
import { RetryAction } from './retry-action.enum';

@Component({
  selector: 'retry-destroying-toast',
  templateUrl: './retry-destroying-toast.component.html',
  styleUrls: ['./retry-destroying-toast.component.scss'],
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
export class RetryDestroyingToastComponent extends Toast {
  constructor(protected toastrService: ToastrService, public toastPackage: ToastPackage) {
    super(toastrService, toastPackage);
  }

  public stickAround(): void {
    // override default toast behavour
  }
  public delayedHideToast(): void {
    // override default toast behavour
  }

  public onRetry(): void {
    this.toastPackage.triggerAction(RetryAction.retry);
    this.resetTimeout();
  }

  public onCancel(): void {
    this.toastPackage.triggerAction(RetryAction.cancel);
  }
}
