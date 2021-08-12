import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPaper } from '../models/ipaper';
import { ISymposium } from '../models/ISymposium';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
 
  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  //Consultar al back por esta solicitud
  getEvaluatorsByPaper(paper: IPaper) {
    return this.httpClient.get(this.apiURL + 'articulos/consultarEvaluadoresXArticulo/' + paper.id);
  }

  getPapersBySymposium(symposium: ISymposium) {
    return this.httpClient.get(this.apiURL + 'articulos/consultarArticulosXSimposio/' + symposium.id);
  }

  post(asignation: any) {
    return this.httpClient.post(this.apiURL + 'asignarArticuloEvaluador/', asignation);
  }

  //Consultar al back por esta solicitud
  //asignation contiene un paper y un evaluador asignado.
  delete(asignation: any) {
    return this.httpClient.delete(this.apiURL + 'articulos/eliminarEvaluadorDeArticulo/', asignation);
  }

  
}
