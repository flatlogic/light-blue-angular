import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { delay, startWith, tap } from 'rxjs/operators';
import {
  DefaultWidgedData,
  initialDefaultWidgetData,
  updatedDefaultWidgetData,
  SharesWidgetData,
  initialSharesWidgetData,
  updatedSharedWidgetData,
  initialAutoloadWidgetData,
  updatedAutoloadWidgetData,
  NewsWidgetData,
  initialNewsWidgetData,
  updatedNewsWidgetData
} from './grid.data';

declare let jQuery: any;

const TIMEOUT: number = 1000;

@Component({
  selector: '[grid]',
  templateUrl: './grid.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./grid.style.scss']
})
export class GridComponent implements OnInit {
  sortOptions: Object = {
    connectWith: '.widget-container',
    handle: 'header, .handle',
    cursor: 'move',
    iframeFix: false,
    items: '.widget:not(.locked)',
    opacity: 0.8,
    helper: 'original',
    revert: true,
    forceHelperSize: true,
    placeholder: 'widget widget-placeholder',
    forcePlaceholderSize: true,
    tolerance: 'pointer'
  };

  public defaultWidgetData$: Observable<DefaultWidgedData[]>;
  public defaultLoading: boolean = false;
  public sharesWidgetData$: Observable<SharesWidgetData[]>;
  public sharesLoading: boolean = false;
  public autoloadWidgetData$: Observable<string>;
  public autoloadLoading: boolean = false;
  public newWidgetData$: Observable<NewsWidgetData[]>;
  public newsLoading: boolean = false;

  private defaultWidgetDataSource: ReplaySubject<DefaultWidgedData[]> = new ReplaySubject(1);
  private sharesWidgetDataSource: ReplaySubject<SharesWidgetData[]> = new ReplaySubject(1);
  private autolaodWidgetDataSource: ReplaySubject<string> = new ReplaySubject(1);
  private newsWidgetDataSource: ReplaySubject<NewsWidgetData[]> = new ReplaySubject(1);

  ngOnInit(): void {
    this.defaultWidgetData$ = this.defaultWidgetDataSource.asObservable().pipe(
      delay(TIMEOUT),
      startWith(initialDefaultWidgetData),
      tap(() => { this.defaultLoading = false; })
    );
    this.sharesWidgetData$ = this.sharesWidgetDataSource.asObservable().pipe(
      delay(TIMEOUT),
      startWith(initialSharesWidgetData),
      tap(() => { this.sharesLoading = false; })
    );
    this.autoloadWidgetData$ = this.autolaodWidgetDataSource.asObservable().pipe(
      delay(TIMEOUT),
      startWith(initialAutoloadWidgetData),
      tap(() => { this.autoloadLoading = false; })
    );
    this.newWidgetData$ = this.newsWidgetDataSource.asObservable().pipe(
      delay(TIMEOUT),
      startWith(initialNewsWidgetData),
      tap(() => { this.newsLoading = false; })
    );

    jQuery('.widget-container').sortable(this.sortOptions);
  }

  public onDefaultReload(): void {
    this.defaultLoading = true;
    this.defaultWidgetDataSource.next(updatedDefaultWidgetData);
  }

  public onSharesReload(): void {
    this.sharesLoading = true;
    this.sharesWidgetDataSource.next(updatedSharedWidgetData);
  }

  public onAutoloadReload(): void {
    this.autoloadLoading = true;
    this.autolaodWidgetDataSource.next(updatedAutoloadWidgetData);
  }

  public onNewsReload(): void {
    this.newsLoading = true;
    this.newsWidgetDataSource.next(updatedNewsWidgetData);
  }
}
