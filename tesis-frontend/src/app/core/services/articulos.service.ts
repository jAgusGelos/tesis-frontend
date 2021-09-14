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

  getEvaluatorsByPaper(paper: IntPaper) {
    return this.httpClient.get(this.apiURL + 'articulos/consultarEvaluadoresArticulo/?idArticulo=' + paper.id);
  }

  getPapersBySymposium(symposium: ISymposium) {
    return this.httpClient.get(this.apiURL + 'articulos/consultarArticulosXSimposio/' + symposium.id);
  }

  calificarArticulo(paperCalification: any) {
    return this.httpClient.put(this.apiURL + 'calificarArticulo/', paperCalification);
  }

  post(asignation: any) {
    return this.httpClient.post(this.apiURL + 'asignarArticuloEvaluador/', asignation);
  }

  //Soliciar esta funcion al backend
  delete(asignation: any) {
    return this.httpClient.delete(this.apiURL + 'articulos/eliminarEvaluadorDeArticulo/', asignation);
  }
}
