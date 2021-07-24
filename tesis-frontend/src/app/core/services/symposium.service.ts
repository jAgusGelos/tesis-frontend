import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISymposium } from '../models/ISymposium';

@Injectable({
  providedIn: 'root'
})
export class SymposiumService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  postSymposium(symposium: ISymposium): any {
    return this.httpClient.post<ISymposium>(this.apiURL + 'simposio/crear/', symposium);
  }

  getSymposium(): any {
    return this.httpClient.get(this.apiURL + 'simposio/todos/');
  }

  putSymposium(symposium: ISymposium): any {
    return this.httpClient.put<ISymposium>(this.apiURL + 'simposio/modificar/' + symposium.id, symposium);
  }

  deleteSymposium(symposium: ISymposium): any {
    return this.httpClient.delete<ISymposium>(this.apiURL + 'simposio/modificar/' + symposium.id);
  }
}
