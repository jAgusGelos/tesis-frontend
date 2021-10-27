import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private apiURL = environment.apiURL;


  constructor(private httpClient: HttpClient) 
  { }

  getEvaluators():any{
    return this.httpClient.get(this.apiURL + 'articulos/lista-evaluadores/?is_active=True');

  }
  getChairsSimposiosPublic(id : number): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-chairs/?idCongreso=' + id);
  }
}
