import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IUser } from '../models/IUser';
import { IUserComplete } from '../models/IUserComplete';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

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

  getSedes(): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-sedes/');
  }

  getLocalidades(): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-localidades/');
  }

  getLocalidadesXProvincia(idProvincia: number): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-localidadesProvincia/?idProvincia=' + idProvincia);
  }

  getProvincias(): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-provincia/');
  }

  getDni(): any {
    return this.httpClient.get(this.apiURL + 'api/lista-tiposDni/');
  }

  postNewPassword(password): any{
    return this.httpClient.post(this.apiURL + 'api/cambiar-contraseña/', password );
  }

  restorePassword(item: string): any{
    return this.httpClient.get(environment.apiURL + 'api/restablecer-contrasenia/' + item);
  }

  register(user: IUserComplete): any {
    return this.httpClient.post<IUser>(this.apiURL + 'api/registrar/', user);
  }

  acceptEvaluatePaper(item: string): any{
    return this.httpClient.get(this.apiURL + 'articulos/aceptar-evaluacion/' + item);
  }

  cancelEvaluatePaper(item: string): any{
    return this.httpClient.get(this.apiURL + 'articulos/rechazar-evaluacion/' + item);
  }
  acceptEvaluator(item: string): any{
    return this.httpClient.put(this.apiURL + 'articulos/aceptar-evaluador/' + item, {});
  }
  isEvaluator(): any{
    return this.httpClient.get(this.apiURL + 'articulos/es-evaluador/');
  }
  cancelAuthor(item: string): any{
    return this.httpClient.delete(this.apiURL + 'articulos/rechazar-autoria/' + item, {});
  }
  cancelEvaluator(item: string): any{
    return this.httpClient.delete(this.apiURL + 'articulos/rechazar-evaluador' + item, {});
  }

  checkUser(email: string): any {
    return this.httpClient.get(this.apiURL + 'inscripciones/verificar-usuario/?email=' + email);
  }

}
