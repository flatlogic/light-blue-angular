import { Component, ViewEncapsulation } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

import { apexOptions1, apexOptions2 } from './apex-charts.data';

@Component({
  selector: 'widgets',
  templateUrl: './widgets.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./widgets.style.scss']
})
export class WidgetsComponent {
  public apexOptions1: ApexOptions = apexOptions1;
  public apexOptions2: ApexOptions = apexOptions2;

}
