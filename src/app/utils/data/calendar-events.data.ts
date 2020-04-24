import { CalendarEvent } from 'angular-calendar';

const NOW: Date = new Date();

export const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: `
    <h3 class="popover-header">
      The flower bed
    </h3>
    <div class="popover-body">
      Contents here
    </div>
    `,
    color: {
      primary: '#5d8fc2',
      secondary: '#5d8fc2'
    },
    start: new Date(NOW.getFullYear(), NOW.getMonth(), 2),
    draggable: false,
    allDay: true
  },
  {
    id: 2,
    title: `
    <h3 class="popover-header">
        Stop world water pollution
    </h3>
    <div class="popover-body">
      Have a kick off meeting with .inc company
    </div>
    `,
    color: {
      primary: '#f0b518',
      secondary: '#f0b518'
    },
    start: new Date(NOW.getFullYear(), NOW.getMonth(), 5),
    draggable: false,
    allDay: true
  },
  {
    id: 3,
    title: `
    <h3 class="popover-header">
      Light Blue 2.2 release
    </h3>
    <div class="popover-body">
      Some contents here
    </div>
    `,
    color: {
      primary: '#64bd63',
      secondary: '#64bd63'
    },
    start: new Date(NOW.getFullYear(), NOW.getMonth(), 18),
    draggable: false,
    allDay: true
  },
  {
    id: 4,
    title: `
    <h3 class="popover-header">
      A Link
    </h3>
    `,
    color: {
      primary: '#dd5826',
      secondary: '#dd5826'
    },
    start: new Date(NOW.getFullYear(), NOW.getMonth(), 28),
    draggable: false,
    allDay: true,
    actions: [{
      label: 'action',
      onClick: () => {
        if (Boolean(document)) {
          const a: HTMLAnchorElement = document.createElement('a');
          a.href = 'http://www.flatlogic.com';
          a.target = '_blank';
          a.click();
          a.remove();
        }
      }
    }]
  }
];
