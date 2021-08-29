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

  postEvaluator(evaluator: string): any {
    return this.httpClient.post(this.apiURL + 'evaluador/crear-evaluador/', evaluator);
  }

  getEvaluators(): any {
    return this.httpClient.get(this.apiURL + 'evaluador/lista-evaluador/');
  }

  getEvaluatorById(id: String): any {
    return this.httpClient.get(this.apiURL + 'evaluador/consultarEvaluador/' + id);
  }

  putEvaluator(evaluator: IEvaluator): any {
    return this.httpClient.put<IEvaluator>(this.apiURL + 'evaluador/modificar/' + evaluator.id, evaluator);
  }

  deleteEvaluator(evaluator: IEvaluator): any {
    return this.httpClient.delete<IEvaluator>(this.apiURL + 'evaluador/eliminar-evaluador/' + evaluator.id);
  }
}
