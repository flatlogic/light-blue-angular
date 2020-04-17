import {
  Component,
  ViewEncapsulation,
  ViewChild,
  OnInit,
  AfterViewInit,
  ElementRef,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { PluginDef, Calendar, EventInput, EventApi, View } from '@fullcalendar/core';
import dayGridPlugin, { DayGridView } from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

@Component({
  selector: '[extra-calendar]',
  templateUrl: './calendar.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./calendar.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('viewEventModal', { static: false }) public viewEventModal: ModalDirective;
  @ViewChild('createEventModal', { static: false }) public createEventModal: ModalDirective;
  @ViewChild('calendar', { static: false }) public calendarComponent: FullCalendarComponent;
  @ViewChild('externalEvents', { static: false }) public externalEventsRef: ElementRef<HTMLElement>;
  public calendarApi: Calendar;
  public calendarPlugins: PluginDef[] = [
    dayGridPlugin,
    timeGrigPlugin,
    interactionPlugin
  ];
  public events: EventInput[];
  public currentDate: Date = new Date();
  public currentEvent: EventApi;
  public eventForm: FormGroup;
  public view: string = 'dayGridMonth';
  private draggable: Draggable;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.eventForm = this.fb.group({
      title: [null],
      start: [null],
      end: [null],
      allDay: [true],
      backgroundColor: ['#64bd63'],
      textColor: ['#fff']
    });


    const d = this.currentDate.getDate();
    const m = this.currentDate.getMonth();
    const y = this.currentDate.getFullYear();
    this.events = [{
      title: 'All Day Event',
      start: new Date(y, m, 1),
      backgroundColor: '#79A5F0',
      textColor: '#fff',
      description: 'Will be busy throughout the whole day'
    },
    {
      title: 'Long Event',
      start: new Date(y, m, d + 5),
      backgroundColor: '#f0af03',
      end: new Date(y, m, d + 7),
      description: 'This conference should be worse visiting'
    },
    {
      id: 999,
      title: 'Blah Blah Car',
      start: new Date(y, m, d - 3, 16, 0),
      backgroundColor: '#f0af03',
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
    }];
  }

  public ngAfterViewInit(): void {
    this.calendarApi = this.calendarComponent.getApi();
    this.draggable = new Draggable(this.externalEventsRef.nativeElement, {
      itemSelector: '.external-event',
      eventData: function (el: HTMLElement) {
        return {
          title: el.innerText,
          className: el.dataset['eventClass']
        };
      }
    });
  }

  public ngOnDestroy(): void {
    if (Boolean(this.draggable)) {
      this.draggable.destroy();
    }
  }

  public onEventClick({ event }: {
    el: HTMLElement;
    event: EventApi;
    jsEvent: MouseEvent;
    view: DayGridView;
  }): void {
    this.currentEvent = event;
    this.viewEventModal.show();
  }

  public onSelect({ start, end, allDay }: {
    start: Date;
    end: Date;
    startStr: string;
    endStr: string;
    allDay: boolean;
    resource?: any;
    jsEvent: MouseEvent;
    view: View;
  }): void {
    this.eventForm.patchValue({
      start,
      end,
      allDay
    });
    this.createEventModal.show();
  }

  public createEvent(): void {
    const title: string = (this.eventForm.get('title').value as string || '').trim();
    const { start, end, allDay, backgroundColor, textColor } = this.eventForm.value;
    if (Boolean(title)) {
      this.calendarApi.addEvent({
        title,
        start,
        end,
        allDay,
        backgroundColor,
        textColor
      });
    }
    this.calendarApi.unselect();
    this.createEventModal.hide();
    this.eventForm.get('title').reset();
  }

  public onDrop({ draggedEl }: {
    date: Date;
    dateStr: string;
    allDay: boolean;
    draggedEl: HTMLElement;
    jsEvent: MouseEvent;
    view: View;
  }): void {
    draggedEl.parentNode.removeChild(draggedEl);
  }

  public changeView(): void {
    this.calendarApi.changeView(this.view);
  }

  public prev(): void {
    this.calendarApi.prev();
  }

  public next(): void {
    this.calendarApi.next();
  }
}

