import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEvalPaper } from '../models/IEvalPaper';

@Injectable({
  providedIn: 'root'
})
export class EvaluatePaperService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient,
              ) { }

  postPaperEval(evaluation): any {
    return this.httpClient.post<IEvalPaper>(this.apiURL + 'articulos/guardar-evaluacion/', evaluation);
  }

  getPaperEval(): any {
    return this.httpClient.get(this.apiURL + 'articulos/consulta-evaluaciones/');
  }

  getEvaluaciones(idArticulo) {
    return this.httpClient.get(this.apiURL + 'articulos/consultaDetalleEvaluacion/?idArticulo=' + idArticulo);
  }

  getTest(idArticulo): any {
    return this.httpClient.get(this.apiURL + 'articulos/consulta-evaluacion/?idArticulo=' + idArticulo);
  }
}
