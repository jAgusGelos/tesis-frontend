import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISede } from '../models/ISede';

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  getSedes(): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-sedes/');
  }

  postSede(sede: ISede): any {
    const item = {
      nombre: sede.nombre,
      calle: sede.direccion,
      numero: sede.numero,
      localidad: sede.idLocalidad
    };
    return this.httpClient.post(this.apiURL + 'congresos/crear-sede/', item);
  }

  putSede(sede: ISede): any {
    const item = {
      nombre: sede.nombre,
      calle: sede.direccion,
      numero: sede.numero,
      localidad: sede.idLocalidad
    };
    return this.httpClient.put(this.apiURL + 'congresos/editar-sede/?id=' + sede.id, item);
  }

  deleteSede(sede: ISede): any {
    return this.httpClient.delete(this.apiURL + 'congresos/eliminar-sede/?id=' + sede.id);
  }
}
