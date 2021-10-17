import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private cookie: CookieService) { }


  private apiURLRegister = environment.apiURL  + 'api/registrar/';
  private apiURLLogin = environment.apiURL  + 'api/login/';
  private apiURLLogout = environment.apiURL + 'api/logout/';
  private apiURLChangePass = environment.apiURL + 'api/cambiarContrasenia/';
  private apiURLRecoverPass = environment.apiURL + 'api/enviarMailRestablecerContrasenia/';



  login(item: any): any {
    return this.http.post<IUser>(this.apiURLLogin, item);
    // .subscribe(res => this.setSession(res));
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
    return decodedToken.id || null;
  }

  getUserRoles(): number[] {
    const idToken = localStorage.getItem('id_token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(idToken);
    return decodedToken.rol || null;
  }

  getCongressId(): number {
    const idToken = localStorage.getItem('id_token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(idToken);
    if (decodedToken){
      return decodedToken.idCongreso;
    }
    return null;
  }

  getSedeId(): number {
    const idToken = localStorage.getItem('id_token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(idToken);
    return decodedToken.sede || null;
  }

  getUserObs(): any {
    const idToken = localStorage.getItem('id_token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(idToken);
    return decodedToken.id.asObservable();
  }

  changePassword(item : any ):any{
    return this.http.post<IUser>(this.apiURLChangePass, item);
  }

  recoverPassword(item : any ):any{
    return this.http.post<IUser>(this.apiURLRecoverPass, {email: item});
  }
  verifyEmail(item : string):any{
    return this.http.get(environment.apiURL + 'api/email-verify/' + item);
  }



}


