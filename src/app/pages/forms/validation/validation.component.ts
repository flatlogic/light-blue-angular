import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
declare let jQuery: any;

@Component({
  selector: '[forms-validation]',
  templateUrl: './validation.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./validation.style.scss']
})
export class ValidationComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    jQuery('.parsleyjs').parsley();
  }
}
