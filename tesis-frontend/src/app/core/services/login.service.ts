import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IUser } from '../models/IUser';
import { from,Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  postLogin(user: IUser): Observable<any> {
    return this.httpClient.post(this.apiURL, user);
  }
}
