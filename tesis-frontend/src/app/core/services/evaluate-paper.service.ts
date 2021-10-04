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

  enviarEvaluacion(ev): any {
    return this.httpClient.put<IEvalPaper>(this.apiURL + 'articulos/enviar-evaluacion/', ev);
  }

  getPaperEval(): any {
    return this.httpClient.get(this.apiURL + 'articulos/consulta-evaluaciones/');
  }

  editarEvaluacion(ev): any {
    return this.httpClient.put(this.apiURL + 'articulos/editar-evaluacion/?idArticulo=' + ev.idArticulo, ev.evaluacion);
  }

  getEvaluaciones(idArticulo): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultaDetalleEvaluacion/?idArticulo=' + idArticulo);
  }

  getTest(idArticulo): any {
    return this.httpClient.get(this.apiURL + 'articulos/consulta-evaluacion/?idArticulo=' + idArticulo);
  }
}
