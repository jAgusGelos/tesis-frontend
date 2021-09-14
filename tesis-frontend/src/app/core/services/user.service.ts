import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IUser } from '../models/IUser';
import { IUserComplete } from '../models/IUserComplete';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  postUserComplete(user: IUserComplete): any {
    return this.httpClient.post(this.apiURL + 'api/editar/', user);
  }

  getAllUsers(): any {
    return this.httpClient.get(this.apiURL + 'api/lista-usuarios/');
  }

  getLoggedUser(): any {
    return this.httpClient.get(this.apiURL + 'api/devolverUsuarioLogueado/');
  }

  deactivate(user: IUser): any {
    return this.httpClient.put<IUser>(this.apiURL + 'api/eliminar/', user);
  }

  getLocalidades(): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-localidades/');
  }

  getProvincias(): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-provincia/');
  }

  getDni(): any {
    return this.httpClient.get(this.apiURL + 'api/lista-tiposDni/');
  }

}
