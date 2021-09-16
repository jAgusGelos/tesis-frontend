import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {

  private apiURL = environment.apiURL;
  constructor(private httpClient: HttpClient) { }

  post(item: any): any {
    this.httpClient.post(this.apiURL + 'mercadoPago', item);
  }
}
