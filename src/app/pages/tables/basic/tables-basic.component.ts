import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import {
  echartBarChartData6,
  echartBarChartData7,
  echartBarChartData8,
  echartBarChartData9,
  echartBarChartData10
} from '../../../utils/echarts.data';
import { BehaviorSubject, Observable } from 'rxjs';
import { getRandomInt } from '../../../utils/randomizer';

@Component({
  selector: '[tables-basic]',
  templateUrl: './tables-basic.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablesBasicComponent implements AfterViewInit {
  private progressbarValue1Source: BehaviorSubject<number> = new BehaviorSubject(0);
  private progressbarValue2Source: BehaviorSubject<number> = new BehaviorSubject(0);
  private progressbarValue3Source: BehaviorSubject<number> = new BehaviorSubject(0);
  private progressbarValue4Source: BehaviorSubject<number> = new BehaviorSubject(0);
  private progressbarValue5Source: BehaviorSubject<number> = new BehaviorSubject(0);

  public progressbarValue1$: Observable<number> = this.progressbarValue1Source.asObservable();
  public progressbarValue2$: Observable<number> = this.progressbarValue2Source.asObservable();
  public progressbarValue3$: Observable<number> = this.progressbarValue3Source.asObservable();
  public progressbarValue4$: Observable<number> = this.progressbarValue4Source.asObservable();
  public progressbarValue5$: Observable<number> = this.progressbarValue5Source.asObservable();

  public echartBarChartData6: any = echartBarChartData6;
  public echartBarChartData7: any = echartBarChartData7;
  public echartBarChartData8: any = echartBarChartData8;
  public echartBarChartData9: any = echartBarChartData9;
  public echartBarChartData10: any = echartBarChartData10;

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.progressbarValue1Source.next(getRandomInt());
      this.progressbarValue2Source.next(getRandomInt());
      this.progressbarValue3Source.next(getRandomInt());
      this.progressbarValue4Source.next(getRandomInt());
      this.progressbarValue5Source.next(getRandomInt());
    });
  }
}
