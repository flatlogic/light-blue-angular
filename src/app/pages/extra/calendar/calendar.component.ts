import {Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
declare let jQuery: any;
declare let moment: any;

@Component({
  selector: '[extra-calendar]',
  templateUrl: './calendar.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./calendar.style.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {
  calendarOptions: any;
  $calendar: any;
  dragOptions: Object = { zIndex: 999, revert: true, revertDuration: 0 };
  event: any = {};
  createEvent: any;
  calendarEvent: string = null;

  @ViewChild('modalWindow', {static: true}) public modalWindow: ModalDirective;

  constructor() {
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    this.calendarOptions = {
      header: {
        left: '',
        center: '',
        right: ''
      },
      events: [
        {
          title: 'All Day Event',
          start: new Date(y, m, 1),
          backgroundColor: '#79A5F0',
          textColor: '#fff',
          description: 'Will be busy throughout the whole day'
        },
        {
          title: 'Long Event',
          start: new Date(y, m, d + 5),
          end: new Date(y, m, d + 7),
          description: 'This conference should be worse visiting'
        },
        {
          id: 999,
          title: 'Blah Blah Car',
          start: new Date(y, m, d - 3, 16, 0),
          allDay: false,
          description: 'Agree with this guy on arrival time'
        },
        {
          id: 1000,
          title: 'Buy this template',
          start: new Date(y, m, d + 3, 12, 0),
          allDay: false,
          backgroundColor: '#555',
          textColor: '#fff',
          description: 'Make sure everything is consistent first'
        },
        {
          title: 'Got to school',
          start: new Date(y, m, d + 16, 12, 0),
          end: new Date(y, m, d + 16, 13, 0),
          backgroundColor: '#64bd63',
          textColor: '#fff',
          description: 'Time to go back'
        },
        {
          title: 'Study some Node',
          start: new Date(y, m, d + 18, 12, 0),
          end: new Date(y, m, d + 18, 13, 0),
          backgroundColor: '#79A5F0',
          textColor: '#fff',
          description: 'Node.js is a platform built ' +
          'on Chrome\'s JavaScript runtime for easily' +
          ' building fast, scalable network applications.' +
          ' Node.js uses an event-driven, non-blocking' +
          ' I/O model that makes it lightweight and' +
          ' efficient, perfect for data-intensive real-time' +
          ' applications that run across distributed devices.'
        },
        {
          title: 'Click for Flatlogic',
          start: new Date(y, m, 28),
          end: new Date(y, m, 29),
          url: 'http://flatlogic.com/',
          backgroundColor: '#e5603b',
          textColor: '#fff',
          description: 'Creative solutions'
        }
      ],
      selectable: true,
      selectHelper: true,
      select: (start, end, allDay): void => {
        this.createEvent = () => {
          const title = this.event.title;
          if (title) {
            this.$calendar.fullCalendar('renderEvent',
              {
                title: title,
                start: start,
                end: end,
                allDay: allDay,
                backgroundColor: '#64bd63',
                textColor: '#fff'
              },
              true // make the event "stick"
            );
          }
          this.$calendar.fullCalendar('unselect');
          this.calendarEvent = null;
          this.modalWindow.hide();
        };
        this.calendarEvent = 'create';
        this.modalWindow.show();
      },
      eventClick: (event): void => {
        this.event = event;
        this.calendarEvent = 'show';
        this.modalWindow.show();
      },
      editable: true,
      droppable: true,

      drop: (dateItem, event): void => { // this function is called when something is dropped
        // retrieve the dropped element's stored Event Object
        const originalEventObject = {
          // use the element's text as the event title
          title: jQuery.trim(jQuery(event.target).text())
        };

        // we need to copy it, so that multiple events don't have a reference to the same object
        const copiedEventObject = jQuery.extend({}, originalEventObject);

        // assign it the date that was reported
        copiedEventObject.start = dateItem;
        copiedEventObject.allDay = !dateItem.hasTime();

        const $categoryClass = jQuery(event.target).data('event-class');
        if ($categoryClass) { copiedEventObject.className = [$categoryClass]; }

        // render the event on the calendar
        // the last `true` argument determines if
        // the event 'sticks'
        // http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
        this.$calendar.fullCalendar('renderEvent', copiedEventObject, true);

        jQuery(event.target).remove();

      },
    };
  }

  addEvent(event): void {
    this.calendarOptions.events.push(event);
  }

  changeView(view): void {
    this.$calendar.fullCalendar('changeView', view);
  }

  currentMonth(): string {
    return moment(this.$calendar.fullCalendar('getDate')).format('MMM YYYY');
  }

  currentDay(): string {
    return moment(this.$calendar.fullCalendar('getDate')).format('dddd');
  }

  prev(): void {
    this.$calendar.fullCalendar('prev');
  }

  next(): void {
    this.$calendar.fullCalendar('next');
  }

  ngOnInit(): void {
    this.$calendar = jQuery('#calendar');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.$calendar.fullCalendar(this.calendarOptions);
      jQuery('.draggable').draggable(this.dragOptions);
    });
  }
}

