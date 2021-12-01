import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient)
  { }

  getProximosEventos(idCongreso: string, idAula: string): any {
    return this.httpClient.get(this.apiURL + 'eventos/proximo-evento/?idCongreso=' + idCongreso + '&idAula=' + idAula);
  }
}
