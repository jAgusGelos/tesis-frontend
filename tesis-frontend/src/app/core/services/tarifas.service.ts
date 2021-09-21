import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  getTarifas() {
    return this.httpClient.get(this.apiURL + 'inscripciones/devolver-tarifas/');
  }

  getTarifasActivas() {
    return this.httpClient.get(this.apiURL + 'inscripciones/devolver-tarifas-activas/');
  }

  postTarifa() {
    return this.httpClient.get(this.apiURL + 'inscripciones/crear-tarifa/');
  }

  putTarifa() {
    return this.httpClient.get(this.apiURL + 'inscripciones/editar-tarifa/');
  }

  deleteTarifa() {
    return this.httpClient.get(this.apiURL + 'inscripciones/eliminar-tarifa/');
  }
}
