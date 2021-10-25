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
      idInscripcion: 1
    };
    return this.httpClient.post(this.apiURL + 'inscripciones/create-preference/', postItem );
  }

  paymentSuccess(token: string): any {
    return this.httpClient.get(this.apiURL + 'inscripciones/pago-inscripcion-success/?token=' + token);
  }
}
