import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private cookie: CookieService) { }


  private apiURLRegister = environment.apiURL  + 'api/registrar/';
  private apiURLLogin = environment.apiURL  + 'api/login/';
  private apiURLLogout = environment.apiURL + 'api/logout/';


  login(item: any): any {
    return this.http.post<IUser>(this.apiURLLogin, item);
    // .subscribe(res => this.setSession(res));
  }

  register(user: IUser): any {
    return this.http.post<IUser>(this.apiURLRegister, { email: user.email, password: user.password });
  }


  setSession(authResult): void {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    const date = new Date();

    this.cookie.set('jwt', authResult.jwt, date.getTime() + (60 * 1000), '', '', true);
    localStorage.setItem('id_token', authResult.jwt);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout(): void {
    this.http.post(this.apiURLLogout, localStorage.getItem('id_token')).subscribe((res: any) => {
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
    });
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  getUserId(): number {
    const idToken = localStorage.getItem('id_token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(idToken);
    return decodedToken.id;
  }

  getCongressId(): number {
    const idToken = localStorage.getItem('id_token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(idToken);
    return decodedToken.idCongreso;
  }

  getSedeId(): number {
    const idToken = localStorage.getItem('id_token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(idToken);
    return decodedToken.sede;
  }



}

