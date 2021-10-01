import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IassignSecChairTheme } from '../models/iassign-sec-chair-theme';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AssignSecChairThemeService {

  apiURL = environment.apiURL;
  idCongress: number;

  constructor(private httpClient: HttpClient,
              private auth: AuthService) {
                this.idCongress = auth.getCongressId();
              }

  //Acordar dirección luego...
  postAssignSecChairTheme(asignacion: any): any {
    const postItem = {
      idCongreso: this.idCongress,
      ...asignacion
    };
    return this.httpClient.post<IassignSecChairTheme>(this.apiURL + 'congresos/asignarChairASimposio/', postItem);
  }

  getAssignSecChairTheme(): any {
    return this.httpClient.get(this.apiURL + 'congresos/devolverChairsSimposios/?idCongreso=' + this.idCongress);
  }

  getUsuarios(): any {
    return this.httpClient.get(this.apiURL + 'api/lista-usuarios/');
  }

  putAssignSecChairTheme(asignacion: IassignSecChairTheme): any {
    return this.httpClient.put<IassignSecChairTheme>(this.apiURL + 'chairportematica/modificar/' + asignacion.idCongress, asignacion);
  }

  deleteAssignSecChairTheme(item: any): any {
    return this.httpClient.request('delete', this.apiURL + 'congresos/eliminarChairSecundario/',
    {body: {idChair: item.idChair, idSimposio: item.idSimposio }});
  }

}
