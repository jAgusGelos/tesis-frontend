import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isDate } from 'moment';
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
    return this.httpClient.get(this.apiURL + 'articulos/consultarEvaluadores/?ctivos=' + paper.id);
  }

  getPapersBySymposium(idSimposio, idEstado) {
    return this.httpClient.get(this.apiURL + 'articulos/consultarArticulosXSimposio/?idSimposio=' + idSimposio + '&idEstado=' + idEstado);
    /*
    0 No filtrar por estado
    1 Creado
    2 Enviado
    3 Asignado
    4 Corregido
    5 ParaReentregar
    6 Aprobado
    7 Rechazado
    8 AprobadoReentrega
    9 RechazadoReentrega
    */
  }

  getPapersByChair() {
    return this.httpClient.get(this.apiURL + 'articulos/consultararticulosXChair/')
  }

  calificarArticulo(paperCalification: any) {
    return this.httpClient.put(this.apiURL + 'calificarArticulo/', paperCalification);
  }

  post(asignation: any) {
    return this.httpClient.post(this.apiURL + 'asignarArticuloEvaluador/', asignation);
  }

  //Solicitar esta funcion al backend
  delete(asignation: any) {
    return this.httpClient.delete(this.apiURL + 'articulos/eliminarEvaluadorDeArticulo/', asignation);
  }
}
