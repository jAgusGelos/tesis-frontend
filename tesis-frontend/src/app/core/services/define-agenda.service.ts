import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISchedule } from '../models/ISchedule';

@Injectable({
  providedIn: 'root'
})
export class DefineAgendaService {

  apiURL = environment.apiURL + '/';

  constructor(private httpClient: HttpClient) { }

  getAgenda(): any {
    return this.httpClient.get(this.apiURL + 'devolver-agenda/id');
  }

  postAgenda(agenda: ISchedule): any {
    return this.httpClient.post<ISchedule>(this.apiURL + 'definir-agenda', agenda);
  }

  putAgenda(agenda: ISchedule): any {
    return this.httpClient.put<ISchedule>(this.apiURL + 'definir-agenda' + agenda, agenda);
  }

  deleteAgenda(agenda: ISchedule): any {
    return this.httpClient.delete<ISchedule>(this.apiURL + 'definir-agenda' + agenda.Id);
  }
}