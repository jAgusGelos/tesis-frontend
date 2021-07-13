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
    return this.httpClient.put(this.apiURL + 'editar/', {UsuarioCompleto: user});
  }

  getLoggedUser(): any {
    const idToken = localStorage.getItem('id_token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(idToken);
    // Cambiar cuando el back lo renombre
    return this.httpClient.get(this.apiURL + 'lista-usuario/');
  }

}
