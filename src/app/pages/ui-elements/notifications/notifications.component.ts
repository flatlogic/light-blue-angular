import { Component, ViewEncapsulation, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { ToastrService, ActiveToast } from 'ngx-toastr';
import { takeUntil, filter } from 'rxjs/operators';

import { ToastPosition } from './toast-position.enum';
import { CancelLaunchToastComponent } from './toasts/cancel-launch/cancel-launch-toast.component';
import { RetryDestroyingToastComponent } from './toasts/retry-destroying/retry-destroying-toast.component';
import { RetryAction } from './toasts/retry-destroying/retry-action.enum';
import { SuccessToastComponent } from './toasts/suceess/success-toast.component';

@Component({
  selector: '[ui-components]',
  templateUrl: './notifications.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./notifications.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent implements AfterViewInit {
  public ToastPosition = ToastPosition;
  public position: ToastPosition = ToastPosition.bottomRight;
  public timeOut: number = 10000;

  constructor(private toastrService: ToastrService) { }

  public ngAfterViewInit(): void {
    this.toastrService.show(
      'Thanks for checking out Notifications!',
      null,
      {
        closeButton: false,
        positionClass: this.position,
        toastComponent: CancelLaunchToastComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
  }

  public setPosition(position: ToastPosition): void {
    this.position = position;
  }

  public launchTermonuclearWar(event: Event): void {
    event.preventDefault();
    const toast: ActiveToast<CancelLaunchToastComponent> = this.toastrService.show(
      'Launching thermonuclear war...',
      null,
      {
        closeButton: true,
        positionClass: this.position,
        toastComponent: CancelLaunchToastComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
    toast.onAction.pipe(
      takeUntil(toast.onHidden)
    ).subscribe(() => {
      this.toastrService.clear(toast.toastId);
      this.avertTermonuclearWar();
    });
  }

  public avertTermonuclearWar(): void {
    this.toastrService.show(
      'Thermonuclear war averted',
      null,
      {
        closeButton: false,
        positionClass: this.position,
        toastComponent: CancelLaunchToastComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
  }

  public showSuccessMessage(event: Event): void {
    event.preventDefault();
    this.toastrService.show(
      'Showing success message was successful!',
      null,
      {
        closeButton: false,
        positionClass: this.position,
        toastComponent: SuccessToastComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
  }

  public destroyAliensWithError(event: Event): void {
    event.preventDefault();
    const toast: ActiveToast<RetryDestroyingToastComponent> = this.toastrService.show(
      'Error destroying alien planet',
      null,
      {
        closeButton: true,
        positionClass: this.position,
        toastComponent: RetryDestroyingToastComponent,
        timeOut: this.timeOut,
        progressBar: true,
        tapToDismiss: false
      }
    );

    toast.onAction.pipe(
      filter((action: RetryAction) => action === RetryAction.retry),
      filter((_: RetryAction, index: number) => index % 2 > 0),
      takeUntil(toast.onHidden)
    ).subscribe(() => {
      this.toastrService.remove(toast.toastId);
      this.destroyAlienPlanet();
    });

    toast.onAction.pipe(
      filter((action: RetryAction) => action === RetryAction.cancel),
      takeUntil(toast.onHidden)
    ).subscribe(() => {
      this.toastrService.remove(toast.toastId);
    });
  }

  public destroyAlienPlanet(): void {
    this.toastrService.show(
      'Alien planet destroyed!',
      null,
      {
        closeButton: false,
        positionClass: this.position,
        toastComponent: CancelLaunchToastComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
  }
}

