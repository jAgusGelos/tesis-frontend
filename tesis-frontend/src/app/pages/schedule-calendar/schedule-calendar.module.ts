import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { ScheduleCalendarRoutingModule } from './schedule-calendar-routing.module';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ScheduleCalendarComponent } from './schedule-calendar.component';
import { FormsModule } from '@angular/forms';
import { ScheduleCalendarService } from 'src/app/core/services/schedule-calendar.service';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);

@NgModule({
  declarations: [ScheduleCalendarComponent],
  imports: [
    CommonModule,
    ScheduleCalendarRoutingModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
        SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange', logEnabled: true })
  ],
  providers: [
    ScheduleCalendarService,
    { provide: LOCALE_ID, useValue: 'en-US' }
  ],
})
export class ScheduleCalendarModule { }
