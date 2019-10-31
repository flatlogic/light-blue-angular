import { Component, ViewChild, OnChanges, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { Skycons } from 'skycons';

@Component({
  selector: 'skycon',
  templateUrl: './skycon.component.html',
  styleUrls: ['./skycon.component.scss']
})
export class SkyconComponent implements OnChanges, OnInit, OnDestroy {
  @Input() public color: string = 'white';
  @Input() public weather: string = 'clear-day';
  @Input() public height: string = '40px';
  @Input() public width: string = '40px';

  private icon: any;

  constructor() { }

  @ViewChild('canvas', { static: true }) public canvas: ElementRef<HTMLCanvasElement>;

  public ngOnChanges(): void {
    this.initIcon();
  }

  public ngOnInit(): void {
    if (!Boolean(this.icon)) {
      this.initIcon();
    }
  }

  public ngOnDestroy(): void {
    this.icon.remove(this.canvas.nativeElement);
  }

  public initIcon(): void {
    this.icon = new Skycons({ color: this.color });
    this.icon.set(this.canvas.nativeElement, this.weather);
    this.icon.play();
  }
}
