import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISymposium } from '../models/ISymposium';
import { IUserComplete } from '../models/IUserComplete';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SymposiumService {


  private apiURL = environment.apiURL;
  idCongress: number;
  idUser: number;

  constructor(private httpClient: HttpClient,
              private auth: AuthService) {
                this.idCongress = this.auth.getCongressId();
                this.idUser = this.auth.getUserId();
              }

  postSymposium(symposium: ISymposium): any {
    const postSymp = {
      nombre: symposium.nombre,
      descripcion: symposium.descripcion
    };
    return this.httpClient.post<ISymposium>(this.apiURL + 'congresos/crear-simposio/', postSymp);
  }

  getSymposium(): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-simposios/');
  }

  getEvaluatorSymposium(): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultar-simposiosEvaluador/');
  }

  deleteEvaluatorSymposium(simposio): any {
    return this.httpClient.delete(this.apiURL + 'articulos/eliminar-simposioEvaluador/?idSimposio=' + simposio.id, simposio);
  }

  postEvaluatorSymposium(data): any {
    return this.httpClient.post(this.apiURL + 'articulos/asignarSimposioEvaluador/', data);
  }

  putSymposium(symposium: ISymposium): any {
    const puttSymp = {
      idSimposio: symposium.id,
      nombre: symposium.nombre,
      descripcion: symposium.descripcion
    };
    return this.httpClient.put<ISymposium>(this.apiURL + 'congresos/editar-simposio/', puttSymp);
  }

  deleteSymposium(symposium: ISymposium): any {
    // return this.httpClient.delete<ISymposium>(this.apiURL + 'simposio/eliminar-simposio/' + symposium.id);
    return this.httpClient.request('delete', this.apiURL + 'congresos/eliminar-simposio/',
    {body: {idSimposio: symposium .id}});
  }

  postSymposiumCongress(symposium: ISymposium): any {
    const postSymp = {
      idSimposio: symposium.id,
      idCongreso: this.idCongress,
      idChair: this.idUser
    };
    return this.httpClient.post(this.apiURL + 'congresos/asignar-simposioxcongreso/', postSymp);
  }

  deleteSymposiumCongress(symposium: ISymposium): any {
    const postSymp = {
      idSimposio: symposium.id,
      idCongreso: this.idCongress,
      idChair: this.idUser
    };
    return this.httpClient.request('delete', this.apiURL + 'congresos/eliminar-simposioxcongreso/',
    {body: {idSimposio: symposium.id,
      idCongreso: this.idCongress,
      idChair: this.idUser}});
  }

  getSymposiumsChairs(): any {
    return this.httpClient.get(this.apiURL + 'congresos/devolverChairsSimposios/');
  // Solicitar esta funci??n al back
  }

  getSymposiumByChair(chair: any): any {
    return this.httpClient.get(this.apiURL + 'congresos/simposio-por-chair/' + chair.id);
  }

  getSymposiumCongress(): any {
    // borrar al merge con call for paper
    // return this.httpClient.get(this.apiURL + 'simposio/congress/' + this.auth.getUserId());
  }
}
