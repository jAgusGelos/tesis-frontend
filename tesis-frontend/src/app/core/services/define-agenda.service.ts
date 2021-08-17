import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISchedule } from '../models/ISchedule';

@Injectable({
  providedIn: 'root'
})
export class DefineAgendaService {

  apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  getAgenda(id: string): any {
    return this.httpClient.get(this.apiURL + 'congreso/devolver-agenda/' + id);
  }

  postAgenda(agenda: ISchedule): any {
    const postAgenda = {
      fechaInCongreso: agenda.fechaInCongreso,
      fechaFinCongreso: agenda.fechaFinCongreso,
      fechaLimPapers: agenda.fechaLimPapers,
      fechaProrrogaPapers: agenda.fechaProrrogaPapers,
      fechaFinEvaluacion: agenda.fechaFinEvaluacion,
      fechaFinReEv: agenda.fechaFinReEv,
      fechaFinInscripTemprana: agenda.fechaFinInscripTemprana,
      fechaFinInscripTardia: agenda.fechaFinInscripTardia,
    };
    return this.httpClient.post<ISchedule>(this.apiURL + 'congreso/definir-agenda/', postAgenda);
  }

  putAgenda(agenda: ISchedule): any {
    return this.httpClient.put<ISchedule>(this.apiURL + 'congreso/definir-agenda/' + agenda, agenda);
  }

  deleteAgenda(agenda: ISchedule): any {
    return this.httpClient.delete<ISchedule>(this.apiURL + 'congreso/definir-agenda/' + agenda.Id);
  }
}
