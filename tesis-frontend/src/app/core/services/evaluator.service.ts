import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEvaluator } from '../models/IEvaluator';

@Injectable({
  providedIn: 'root'
})
export class EvaluatorService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient,
              ) { }

  postEvaluator(idUsuarios): any {
    return this.httpClient.post(this.apiURL + 'articulos/asignarRolEvaluador/', idUsuarios);
  }

  getEvaluators(activos): any {
    // return this.httpClient.request('get', this.apiURL + 'articulos/lista-evaluadores/',
    // {body: {is_active: true}});
    return this.httpClient.get(this.apiURL + 'articulos/consultarEvaluadores/?activos=' + activos);
  }

  getEvaluatorById(id: String): any {
    return this.httpClient.get(this.apiURL + 'evaluador/consultarEvaluador/' + id);
  }

  putEvaluator(evaluator: IEvaluator): any {
    return this.httpClient.put<IEvaluator>(this.apiURL + 'articulos/modificar/' + evaluator.id, evaluator);
  }

  deleteEvaluator(evaluator: IEvaluator): any {
    return this.httpClient.delete<IEvaluator>(this.apiURL + 'evaluador/eliminar-evaluador/' + evaluator.id);
  }

  calificarEvaluador(evCalification: any) {
    return this.httpClient.put(this.apiURL + 'evaluador/calificarEvaluador/', evCalification);
  }
}
