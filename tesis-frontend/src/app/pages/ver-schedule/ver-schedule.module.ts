import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleCalendarService } from 'src/app/core/services/schedule-calendar.service';
import localeEs from '@angular/common/locales/es';
import { VerScheduleComponent } from './ver-schedule.component';
import { VerScheduleRoutingModule } from './ver-schedule-routing.module';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    VerScheduleComponent
  ],
  imports: [
    CommonModule,
    VerScheduleRoutingModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
        SchedulerModule.forRoot({ locale: 'es', headerDateFormat: 'daysRange', logEnabled: true })
  ],
  providers: [
    ScheduleCalendarService,
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
})
export class VerScheduleModule { }
