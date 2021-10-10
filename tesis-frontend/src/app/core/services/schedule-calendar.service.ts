import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarSchedulerEvent, CalendarSchedulerEventAction, CalendarSchedulerEventStatus } from 'angular-calendar-scheduler';
import { addDays, addHours, addMinutes, setHours, startOfHour, subHours, subMinutes } from 'date-fns';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleCalendarService {

  apiUrl = '';
  idCongreso = null;
  constructor(private httpClient: HttpClient,
              private auth: AuthService) {
                this.idCongreso = this.auth.getCongressId();

   }

  getEvents(actions: CalendarSchedulerEventAction[]): Promise<CalendarSchedulerEvent[]> {
    const events = [
         {
            id: '1',
            start: addDays(startOfHour(new Date()), 1),
            end: addDays(addHours(startOfHour(new Date()), 1), 1),
            title: 'Event 1',
            content: 'IMPORTANT EVENT',
            color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
            actions,
            status: 'danger' as CalendarSchedulerEventStatus,
            isClickable: true,
            isDisabled: false,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        } as CalendarSchedulerEvent,
         {
            id: '12',
            start: subHours(addDays(startOfHour(new Date()), 1), 1),
            end: subHours(addDays(addHours(startOfHour(new Date()), 1), 1), 1),
            title: 'Event 12',
            content: 'IMPORTANT EVENT',
            color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
            actions,
            status: 'danger' as CalendarSchedulerEventStatus,
            isClickable: true,
            isDisabled: false,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        } as CalendarSchedulerEvent
    ];

    return new Promise(resolve => setTimeout(() => resolve(events), 3000));
}

  getRoomEvents(idRoom: number): any {
    return this.httpClient.get(this.apiUrl + 'eventos/consultar-eventosXAula/?idAula=' + idRoom);
  }

  deleteEvento(idEvento: number): any {
    return this.httpClient.delete(this.apiUrl + 'eventos/eliminar-evento/?idEvento=' + idEvento);
  }

  postEvento(evento: any): any {
    const event = {
      ...evento,
      idCongreso: this.idCongreso
    };
    return this.httpClient.post(this.apiUrl + 'eventos/crear-evento/', event);
  }

}
