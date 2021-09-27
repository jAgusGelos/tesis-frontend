import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITarifa } from '../models/ITarifa';
import { CongressService } from './congress.service';

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  idCongreso: number;
  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient, private congressService: CongressService) {
    this.idCongreso = this.congressService.idCongreso;
  }

  getTarifas() {
    return this.httpClient.get(this.apiURL + 'inscripciones/devolver-tarifas/?idCongreso= ' + this.idCongreso.toString());
  }

  getTarifaById(idTarifa) {
    return this.httpClient.get(this.apiURL + 'inscripciones/devolver-tarifa/?idCongreso= ' + this.idCongreso.toString() + '&idTarifa=' + idTarifa);
  }

  getTarifasActivas() {
    return this.httpClient.get(this.apiURL + 'inscripciones/devolver-tarifas-activas/?idCongreso= ' + this.idCongreso.toString());
  }

  postTarifa(tarifa: ITarifa) {
    return this.httpClient.post(this.apiURL + 'inscripciones/crear-tarifa/', tarifa);
  }

  putTarifa(tarifa: ITarifa) {
    return this.httpClient.put(this.apiURL + 'inscripciones/editar-tarifa/?id=' + tarifa.id, tarifa);
  }

  deleteTarifa(id) {
    return this.httpClient.delete(this.apiURL + 'inscripciones/eliminar-tarifa/?id=' + id);
  }
}