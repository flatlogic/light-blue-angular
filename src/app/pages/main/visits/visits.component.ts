import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'visits',
  templateUrl: './visits.template.html',
  styleUrls: ['./visits.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VisitsComponent implements OnInit {
  config: any;
  month: any;
  year: any;

  constructor() {
  }

  ngOnInit(): void {
    const now = new Date();
    this.month = now.getMonth() + 1;
    this.year = now.getFullYear();
  }
}
