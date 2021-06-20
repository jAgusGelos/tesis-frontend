import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  postLogin(user: Login): any {
    return this.httpClient.post(this.apiURL, user);
  }
}
