import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ICongress } from '../models/ICongress';



@Injectable({
  providedIn: 'root'
})
export class CongressService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient,
              ) { }

  postCongress(congress: ICongress): any {
    return this.httpClient.post<ICongress>(this.apiURL + 'congresos/crear-congreso/', congress);
  }

  getCongress(): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-congresos/');
  }

  putCongress(congress: ICongress): any {
    return this.httpClient.put<ICongress>(this.apiURL + 'congresos/modificar/' + congress.id, congress);
  }

  deleteCongress(congress: ICongress): any {
    // return this.httpClient.delete<ICongress>(this.apiURL + 'congresos/eliminar-congreso/' + congress.id);
    return this.httpClient.request('delete', this.apiURL + 'congresos/eliminar-congreso/',
    {body: {sede: congress.sede, año: congress.ano}});
  }
}
