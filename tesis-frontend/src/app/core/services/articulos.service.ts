import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IntPaper } from '../models/IntPaper';
import { ISymposium } from '../models/ISymposium';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  getEvaluatorsByPaper(paper: IntPaper): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultarEvaluadores/' + paper.id);
  }

  getPapersBySymposium(symposium: ISymposium): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultarArticulosXSimposio/' + symposium.id);
  }

  calificarArticulo(paperCalification: any): any {
    return this.httpClient.put(this.apiURL + 'calificarArticulo/', paperCalification);
  }

  post(asignation: any): any {
    return this.httpClient.post(this.apiURL + 'asignarArticuloEvaluador/', asignation);
  }

  //Soliciar esta funcion al backend
  delete(asignation: any) {
    return this.httpClient.delete(this.apiURL + 'articulos/eliminarEvaluadorDeArticulo/', asignation);
  }
}
