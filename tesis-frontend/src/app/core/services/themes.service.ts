import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IThemes } from '../models/ithemes';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  apiURLThemes = environment.apiURL + '/' + 'themes';

  constructor(private httpClient: HttpClient) { }

  getThemes(): any {
    return this.httpClient.get(this.apiURLThemes);
  }

  postThemes(theme: IThemes): any {
    return this.httpClient.post<IThemes>(this.apiURLThemes + 'themes/crear/', theme);
  }

  putThemes(theme: IThemes): any {
    return this.httpClient.put<IThemes>(this.apiURLThemes + 'themes/modificar/' + theme.id, theme);
  }

  deleteThemes(theme: IThemes): any {
    return this.httpClient.delete<IThemes>(this.apiURLThemes + 'themes/modificar/' + theme.id);
  }
}
