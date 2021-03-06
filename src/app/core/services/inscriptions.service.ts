import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {

  private apiURL = environment.apiURL;
  constructor(private httpClient: HttpClient) { }

  generatePreference(item: any): any {
    const postItem = {
      idInscripcion: +item
    };
    return this.httpClient.post(this.apiURL + 'inscripciones/create-preference/', postItem );
  }

  paymentSuccess(token: string): any {
    return this.httpClient.get(this.apiURL + 'inscripciones/pago-inscripcion-success/?token=' + token);
  }

  inscribirme(item: any): any {
    const postItem = {
      cuponDescuento: item
    };
    return this.httpClient.post(this.apiURL + 'inscripciones/crear-inscripcion/', postItem );
  }

  inscripcionFisicaConUsuario(email: string): any {
    const postItem = {
      email
    };
    return this.httpClient.post(this.apiURL + 'inscripciones/crear-inscripcion-fisica/', postItem );
  }

  inscripcionFisicaSinUsuario(data: any): any {
    return this.httpClient.post(this.apiURL + 'inscripciones/crear-inscripcion-sin-usuario/', data );
  }
}
