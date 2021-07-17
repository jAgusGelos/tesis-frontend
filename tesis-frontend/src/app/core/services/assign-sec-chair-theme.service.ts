import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IassignSecChairTheme } from '../models/iassign-sec-chair-theme';

@Injectable({
  providedIn: 'root'
})
export class AssignSecChairThemeService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  //Acordar dirección luego...
  postAssignSecChairTheme(asignacion: IassignSecChairTheme[]): any {
    return this.httpClient.post<IassignSecChairTheme>(this.apiURL + 'chairportematica/crear/', asignacion);
  }

  getAssignSecChairTheme(): any {
    return this.httpClient.get(this.apiURL + 'congreso/todos/');
  }

  putAssignSecChairTheme(asignacion: IassignSecChairTheme): any {
    return this.httpClient.put<IassignSecChairTheme>(this.apiURL + 'chairportematica/modificar/' + asignacion.idCongress, asignacion);
  }

  deleteAssignSecChairTheme(asignacion: IassignSecChairTheme): any {
    return this.httpClient.delete<IassignSecChairTheme>(this.apiURL + 'chairportematica/modificar/' + asignacion.idCongress);
  }

}
