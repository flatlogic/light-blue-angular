import { Component, ViewChild, OnChanges, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import * as Skycons from 'skycons';

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
  @Input() public playing: boolean = true;

  private icon: any = new (Skycons(window))();
  private initialized: boolean = false;

  @ViewChild('canvas', { static: true }) public canvas: ElementRef<HTMLCanvasElement>;

  public ngOnChanges(): void {
    this.initIcon();
    this.initialized = true;
  }

  public ngOnInit(): void {
    if (!this.initialized) {
      this.initIcon();
      this.initialized = true;
    }
  }

  public ngOnDestroy(): void {
    this.icon.remove(this.canvas.nativeElement);
  }

  public initIcon(): void {
    this.icon.remove(this.canvas.nativeElement);
    this.icon.color = this.color;
    this.icon.set(this.canvas.nativeElement, this.weather);
    this.playing ? this.icon.play() : this.icon.pause();
  }
}
