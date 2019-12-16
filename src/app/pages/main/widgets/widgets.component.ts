import { Component, ViewEncapsulation, AfterViewInit, OnDestroy, ViewChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { apexOptions1, apexOptions2 } from '../../../utils/apex-charts.data';
import { echartLineBarData, echartDynamicAreaData2, echartBarChartData5, echartLineChartData3 } from '../../../utils/echarts.data';

@Component({
  selector: 'widgets',
  templateUrl: './widgets.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./widgets.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetsComponent implements AfterViewInit, OnDestroy {
  public apexOptions1: ApexOptions = apexOptions1;
  public apexOptions2: ApexOptions = apexOptions2;
  @ViewChildren(ChartComponent) public apexchartsList: QueryList<ChartComponent>;
  public echartDynamicAreaData2: any = echartDynamicAreaData2;
  public echartDynamicAreaDataUpdate: any;
  public echartBarChartData5: any = echartBarChartData5;
  public echartLineBarData: any = echartLineBarData;
  public echartLineChartData3: any = echartLineChartData3;

  public verticalSwiperConfig: SwiperConfigInterface = {
    direction: 'vertical',
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    speed: 750,
    loop: true,
    autoplay: true,
    slidesPerView: 'auto'
  };

  public verticalFlipSwiperConfig: SwiperConfigInterface = {
    effect: 'flip',
    direction: 'vertical',
    flipEffect: {
      slideShadows: false
    },
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    speed: 750,
    loop: true,
    autoplay: true,
    slidesPerView: 1
  };

  public horizontalFlipSwiperConfig: SwiperConfigInterface = {
    effect: 'flip',
    flipEffect: {
      slideShadows: false
    },
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    speed: 600,
    loop: true,
    autoplay: true,
    slidesPerView: 1
  };

  private interval: any;

  public ngAfterViewInit(): void {
    this.interval = setInterval(() => {
      const data1: any = this.echartDynamicAreaData2.series[0].data;
      const data2: any = this.echartDynamicAreaData2.series[1].data;
      data1.shift();
      data1.push(parseInt(Math.round(Math.random() * 1000).toFixed(0), 10));
      data2.shift();
      data2.push(parseInt((Math.random() * 10 + 5).toFixed(0), 10));
      this.echartDynamicAreaDataUpdate = {
        series: [
          { data: data1 },
          { data: data2 }
        ]
      };
    }, 3000);
  }

  public ngOnDestroy(): void {
    if (this.interval) { clearInterval(this.interval); }
    this.apexchartsList.forEach((c: ChartComponent) => {
      if (Boolean(c)) { c.destroy(); }
    });
  }
}
