import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISchedule } from '../models/ISchedule';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DefineAgendaService {

  apiURL = environment.apiURL;
  idCongress;

  constructor(private httpClient: HttpClient,
              private auth: AuthService) {
    this.idCongress = auth.getCongressId();
   }

  getAgenda(id: string): any {
    return this.httpClient.get(this.apiURL + 'congreso/devolver-agenda/' + id);
  }

  postAgenda(agenda: any): any {
    const postAgenda = {
      ...agenda,
      id: this.idCongress
    };
    console.log(postAgenda);

    return this.httpClient.post<ISchedule>(this.apiURL + 'congresos/definir-agenda/', postAgenda);
  }

  deleteAgenda(agenda: ISchedule): any {
    return this.httpClient.delete<ISchedule>(this.apiURL + 'congreso/definir-agenda/' + agenda.Id);
  }
}
