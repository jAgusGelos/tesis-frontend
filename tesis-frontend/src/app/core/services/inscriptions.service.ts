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

  inscribirme(item: any): any {
    const postItem = {
      cuponDescuento: item
    };
    return this.httpClient.post(this.apiURL + 'inscripciones/crear-inscripcion/', postItem );
  }
}
