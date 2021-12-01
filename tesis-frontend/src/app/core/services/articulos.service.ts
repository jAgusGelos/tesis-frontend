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
    return this.httpClient.get(this.apiURL + 'articulos/consultarEvaluadoresArticulo/?idArticulo=' + paper.id);
  }

  getPapersBySymposium(symposium: ISymposium): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultarArticulosXSimposio/' + symposium.id);
  }

  calificarArticulo(paperCalification: any): any {
    return this.httpClient.put(this.apiURL + 'calificarArticulo/', paperCalification);
  }

  getCameraReady(): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultarArticulosCameraReady/');
  }

  getNotAssigned(idSimposio: string): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultarArticulosParaEventos/?idSimposio=' + idSimposio);
  }

  post(asignation: any): any {
    return this.httpClient.post(this.apiURL + 'asignarArticuloEvaluador/', asignation);
  }

  delete(asignation: any): any {
    return this.httpClient.delete(this.apiURL + 'articulos/eliminarEvaluadorDeArticulo/', asignation);
  }

  getPaperEvaluators(): any {
    return this.httpClient.get(this.apiURL + 'articulos/getArticulosEvaluadoresCompleto/');
  }
}
