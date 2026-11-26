import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Toast } from 'ngx-toastr';

@Component({
  standalone: false,
  selector: 'cancel-launch-toast',
  templateUrl: './cancel-launch-toast.component.html',
  styleUrls: ['./cancel-launch-toast.component.scss'],
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
export class CancelLaunchToastComponent extends Toast {
  public onAction(event: Event) {
    event.stopPropagation();
    this.toastPackage.triggerAction();
    return false;
  }
}
