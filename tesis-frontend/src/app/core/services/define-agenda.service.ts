import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAgenda } from '../models/Iagenda';

@Injectable({
  providedIn: 'root'
})
export class DefineAgendaService {

  apiURL = environment.apiURL + '/';

  constructor(private httpClient: HttpClient) { }

  getAgenda(): any {
    return this.httpClient.get(this.apiURL + 'devolver-agenda/id');
  }

  postAgenda(agenda: IAgenda): any {
    return this.httpClient.post<IAgenda>(this.apiURL + 'definir-agenda', agenda);
  }

  putAgenda(agenda: IAgenda): any {
    return this.httpClient.put<IAgenda>(this.apiURL + 'definir-agenda' + agenda, agenda);
  }

  deleteAgenda(agenda: IAgenda): any {
    return this.httpClient.delete<IAgenda>(this.apiURL + 'definir-agenda' + agenda.Id);
  }
}
