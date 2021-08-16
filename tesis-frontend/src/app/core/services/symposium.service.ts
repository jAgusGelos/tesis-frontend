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

  constructor(private httpClient: HttpClient,
              private auth: AuthService) { }

  postSymposium(symposium: ISymposium): any {
    return this.httpClient.post<ISymposium>(this.apiURL + 'congresos/crear-simposio/', symposium);
  }

  getSymposium(): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-simposios/');
  }

  getSymposiumCongress(): any {
    // borrar al merge con call for paper
    // return this.httpClient.get(this.apiURL + 'simposio/congress/' + this.auth.getUserId());
  }

  putSymposium(symposium: ISymposium): any {
    return this.httpClient.put<ISymposium>(this.apiURL + '/congresos/editar-simposio/', symposium);
  }

  deleteSymposium(symposium: ISymposium): any {
    return this.httpClient.delete<ISymposium>(this.apiURL + 'simposio/modificar/' + symposium.id);
  }

  postSymposiumCongress(item: any): any {
    return this.httpClient.post(this.apiURL + 'ADEFINIR', item);
  }

  //Solicitar esta función al back
  getSymposiumByChair(chair: IUserComplete): any {
    return this.httpClient.get(this.apiURL + 'congresos/simposio-por-chair/' + chair.id)
  }
}
