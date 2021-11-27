import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssistantService {

  private apiURL = environment.apiURL;

  constructor( private httpClient: HttpClient) { }

  getAyudantes(): any {
    return this.httpClient.get(this.apiURL + 'inscripciones/lista-ayudantes/');
  }

  asignarRolAyudante(ayudante): any {
    return this.httpClient.post(this.apiURL + 'inscripciones/asignar-rol-ayudante/?idAyudante=' + ayudante.id, ayudante);
  }

  deleteAyudante(ayudante): any {
    return this.httpClient.delete(this.apiURL + 'inscripciones/eliminar-ayudante/?idAyudante=' + ayudante.id);
  }

  acceptAssistant(item: string): any{
    return this.httpClient.put(this.apiURL + 'inscripciones/aceptar-rol-ayudante/' + item, {});
  }
}
