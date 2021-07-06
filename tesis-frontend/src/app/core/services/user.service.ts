import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IUser } from '../models/IUser';
import { IUserComplete } from '../models/IUserComplete';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  postUserComplete(user: IUserComplete): any {
    return this.httpClient.put(this.apiURL, {UsuarioCompleto: user});
  }

}
