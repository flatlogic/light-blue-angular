import {Component} from '@angular/core';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.html'
})
export class AlertsComponent {
  alerts: Array<any> = [{
    id: 'al-1',
    type: 'success',
    msg: '<span class="fw-semi-bold">Success:</span> You successfully read this important alert message.',
    visible: [true, true, true],
  }, {
    id: 'al-2',
    type: 'info',
    msg: '<span class="fw-semi-bold">Info:</span> This alert needs your attention, but it\'s not super important.',
    visible: [true, true, true],
  }, {
    id: 'al-3',
    type: 'warning',
    msg: '<span class="fw-semi-bold"><strong>Warning:</strong></span> Best check yo self, you\'re not looking too good.',
    visible: [true, true, true],
  }, {
    id: 'al-4',
    type: 'danger',
    msg: '<span class="fw-semi-bold">Danger:</span> Change this and that and try again. <a class="btn btn-default btn-xs float-right mr" href="#">Ignore</a> <a class="btn btn-danger btn-xs float-right mr-xs" href="#">Take this action</a>',
    visible: [true, true, true],
  }];
}
