import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICongress } from '../models/ICongress';

@Injectable({
  providedIn: 'root'
})
export class CongressService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  postCongress(congress: ICongress): any {
    return this.httpClient.post<ICongress>(this.apiURL + '/congreso/crear/', congress);
  }

  getCongress(): any {
    return this.httpClient.get(this.apiURL + '/congreso/todos/');
  }

  putCongress(congress: ICongress): any {
    return this.httpClient.put<ICongress>(this.apiURL + '/congreso/modificar/' + congress.id, congress);
  }

}
