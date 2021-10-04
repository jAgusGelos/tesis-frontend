import { Component, HostListener, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import {
  CalendarView,
  CalendarDateFormatter,
  DateAdapter
} from 'angular-calendar';
import {
  addPeriod,
  CalendarSchedulerEvent,
  CalendarSchedulerEventAction,
  DAYS_IN_WEEK,
  endOfPeriod,
  SchedulerEventTimesChangedEvent,
  SchedulerViewDay,
  SchedulerViewHour,
  SchedulerViewHourSegment,
  startOfPeriod,
  subPeriod
} from 'angular-calendar-scheduler';
import { addMonths, endOfDay } from 'date-fns';
import { Subject } from 'rxjs';
import { ScheduleCalendarService } from 'src/app/core/services/schedule-calendar.service';
@Component({
  selector: 'app-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.css']
})
export class ScheduleCalendarComponent implements OnInit {

  CalendarView = CalendarView;

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  viewDays: number = DAYS_IN_WEEK;
  refresh: Subject<any> = new Subject();
  locale = 'en';
  hourSegments = 3;
  weekStartsOn = 1;
  startsWithToday = true;
  activeDayIsOpen = true;
  excludeDays: number[] = []; // [0];
  dayStartHour = 6;
  dayEndHour = 22;

  minDate: Date = new Date();
  maxDate: Date = endOfDay(addMonths(new Date(), 1));
  dayModifier: Function;
  hourModifier: Function;
  segmentModifier: Function;
  eventModifier: Function;
  prevBtnDisabled = false;
  nextBtnDisabled = false;

  actions: CalendarSchedulerEventAction[] = [
      {
          when: 'enabled',
          label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">cancel</i></span>',
          title: 'Delete',
          onClick: (event: CalendarSchedulerEvent): void => {
              console.log('Pressed action \'Delete\' on event ' + event.id);
          }
      },
      {
          when: 'cancelled',
          label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">autorenew</i></span>',
          title: 'Restore',
          onClick: (event: CalendarSchedulerEvent): void => {
              console.log('Pressed action \'Restore\' on event ' + event.id);
          }
      }
  ];

  events: CalendarSchedulerEvent[];

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
      this.adjustViewDays();
  }

  constructor(@Inject(LOCALE_ID) locale: string, private dateAdapter: DateAdapter, private calendarService: ScheduleCalendarService) {
      this.locale = locale;

      this.segmentModifier = ((segment: SchedulerViewHourSegment): void => {
          segment.isDisabled = !this.isDateValid(segment.date);
      }).bind(this);

      this.eventModifier = ((event: CalendarSchedulerEvent): void => {
          event.isDisabled = !this.isDateValid(event.start);
      }).bind(this);

      this.adjustViewDays();
      this.dateOrViewChanged();
  }

  ngOnInit(): void {

    this.calendarService.getEvents(this.actions)
    .then((events: CalendarSchedulerEvent[]) => (this.events = events));
  }

  adjustViewDays(): void {
      const currentWidth: number = window.innerWidth;
      if (currentWidth <= 450) {
          this.viewDays = 1;
      } else if (currentWidth <= 768) {
          this.viewDays = 3;
      } else {
          this.viewDays = DAYS_IN_WEEK;
      }
  }

  changeDate(date: Date): void {
      console.log('changeDate', date);
      this.viewDate = date;
      this.dateOrViewChanged();
  }

  changeView(view: CalendarView): void {
      console.log('changeView', view);
      this.view = view;
      this.dateOrViewChanged();
  }

  dateOrViewChanged(): void {
      if (this.startsWithToday) {
          this.prevBtnDisabled = !this.isDateValid(subPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1));
          this.nextBtnDisabled = !this.isDateValid(addPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1));
      } else {
          this.prevBtnDisabled = !this.isDateValid(endOfPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, subPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1)));
          this.nextBtnDisabled = !this.isDateValid(startOfPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, addPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1)));
      }

      if (this.viewDate < this.minDate) {
          this.changeDate(this.minDate);
      } else if (this.viewDate > this.maxDate) {
          this.changeDate(this.maxDate);
      }
  }

  private isDateValid(date: Date): boolean {
      return /*isToday(date) ||*/ date >= this.minDate && date <= this.maxDate;
  }

  dayHeaderClicked(day: SchedulerViewDay): void {
      console.log('dayHeaderClicked Day', day);
  }

  hourClicked(hour: SchedulerViewHour): void {
      console.log('hourClicked Hour', hour);
  }

  segmentClicked(action: string, segment: SchedulerViewHourSegment): void {
      console.log('segmentClicked Action', action);
      console.log('segmentClicked Segment', segment);
  }

  eventClicked(action: string, event: CalendarSchedulerEvent): void {
      console.log('eventClicked Action', action);
      console.log('eventClicked Event', event);
  }

  eventTimesChanged({ event, newStart, newEnd, type }: SchedulerEventTimesChangedEvent): void {
      console.log('eventTimesChanged Type', type);
      console.log('eventTimesChanged Event', event);
      console.log('eventTimesChanged New Times', newStart, newEnd);
      const ev: CalendarSchedulerEvent = this.events.find(e => e.id === event.id);
      ev.start = newStart;
      ev.end = newEnd;
      this.refresh.next();
  }
}
