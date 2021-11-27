import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarSchedulerEvent, CalendarSchedulerEventAction, CalendarSchedulerEventStatus } from 'angular-calendar-scheduler';
import { addDays, addHours, addMinutes, setHours, startOfHour, subHours, subMinutes } from 'date-fns';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleCalendarService {

  apiUrl = environment.apiURL;
  idCongreso = null;
  constructor(private httpClient: HttpClient,
              private auth: AuthService) {
                this.idCongreso = this.auth.getCongressId();

   }

  getRoomEvents(idRoom: number, idCongreso?: number): any {
    return this.httpClient.get(this.apiUrl + 'eventos/consultar-eventosXAula/?idAula=' +
    idRoom + '&idCongreso=' + (idCongreso || this.idCongreso ));
  }

  deleteEvento(idEvento: number): any {
    return this.httpClient.delete(this.apiUrl + 'eventos/eliminar-evento/?idEvento=' + idEvento);
  }

  postEvento(evento: any): any {
    return this.httpClient.post(this.apiUrl + 'eventos/crear-evento/', evento);
  }

  putEvento(evento: any): any {
    return this.httpClient.put(this.apiUrl + 'eventos/modificar-evento/?idEvento=' + evento.idEvento, evento);
  }

  postPlenaria(plenaria: any): any {
    return this.httpClient.post(this.apiUrl + 'eventos/crear-breakCharla/', plenaria);
  }

  putPlenaria(plenaria: any): any {
    return this.httpClient.put(this.apiUrl + 'eventos/modificar-breakCharla/?idEvento=' + plenaria.idEvento, plenaria);
  }

  generarQR(): any {
    return this.httpClient.get(this.apiUrl + 'eventos/getQrAulas/?idCongreso=' + this.idCongreso);
  }

  calificar(calificacion: any): any {
    return this.httpClient.post(this.apiUrl + 'eventos/registarCalificacionEvento/', calificacion);
  }

}
