import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private cookie: CookieService) { }

  apiURLRegister = environment.apiURL + '/' + 'registrar/';
  apiURLLogin = environment.apiURL + '/' + 'login/';

  login(email: string, password: string): any {
    return this.http.post<IUser>(this.apiURLLogin, { email, password }).subscribe(res => this.setSession(res));
  }

  register(user: IUser): any {

    return this.http.post<IUser>(this.apiURLRegister, { email: user.email, password: user.password })
    .subscribe(res => this.setSession(res));
  }

  private setSession(authResult): void {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }
}
