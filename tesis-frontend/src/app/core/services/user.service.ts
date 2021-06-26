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

  postUser(user: IUser): any {
    return this.httpClient.post(this.apiURL, user);
  }

  postUserComplete(user: IUserComplete): any {
    return this.httpClient.put(this.apiURL, user);
  }

}
