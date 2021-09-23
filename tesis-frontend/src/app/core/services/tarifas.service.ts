import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITarifa } from '../models/itarifa';

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

  postTarifa(tarifa: ITarifa) {
    return this.httpClient.post(this.apiURL + 'inscripciones/crear-tarifa/', tarifa);
  }

  putTarifa(tarifa: ITarifa) {
    return this.httpClient.put(this.apiURL + 'inscripciones/editar-tarifa/', tarifa);
  }

  deleteTarifa(idTarifa) {
    return this.httpClient.delete(this.apiURL + 'inscripciones/eliminar-tarifa/?idTarifa=' + idTarifa);
  }
}
