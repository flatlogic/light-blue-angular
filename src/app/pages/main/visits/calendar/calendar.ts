import {AfterViewInit, Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'calendar',
  template: `<div #calendarWrapper class="calendar-wrapper" [ngClass]="{'white': white}"></div>`,
  styleUrls: ['./calendar.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CalendarComponent implements AfterViewInit {
  $el: any;

  @Input() events: Array<any>;
  @Input() white: boolean = false;

  @ViewChild('calendarWrapper', {static: true}) el: ElementRef;

  render(): void {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    this.$el.calendar({
      months: monthNames,
      days: dayNames,
      events: this.events,
      popover_options: {
        placement: 'top',
        html: true
      }
    });
    this.$el.find('.icon-arrow-left').addClass('la la-arrow-left');
    this.$el.find('.icon-arrow-right').addClass('la la-arrow-right');
    const restyleCalendar = () => {
      this.$el.find('.event').each(function(): void {
        const $this = jQuery(this),
          $eventIndicator = jQuery('<span></span>');
        $eventIndicator
          .css('background-color', $this.css('background-color'))
          .appendTo($this.find('a'));
        $this.css('background-color', '');
      });
    };
    this.$el.find('.icon-arrow-left, .icon-arrow-right').parent().on('click', restyleCalendar);
    restyleCalendar();
  }

  ngAfterViewInit(): void {
    this.$el = jQuery(this.el.nativeElement);
    this.render();
  }
}
