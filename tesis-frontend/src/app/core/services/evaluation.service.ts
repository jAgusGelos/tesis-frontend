import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEvaluation } from '../models/IEvaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient,
              ) { }

  postEvaluation(evaluation: IEvaluation): any {
    return this.httpClient.post<IEvaluation>(this.apiURL + 'evaluacion/crear-evaluacion/', evaluation);
  }

  getEvaluation(): any {
    return this.httpClient.get(this.apiURL + 'evaluacion/lista-evaluacion/');
  }

  putEvaluation(evaluation: IEvaluation): any {
    return this.httpClient.put<IEvaluation>(this.apiURL + 'evaluacion/modificar/' + evaluation.id, evaluation);
  }

  deleteEvaluation(evaluation: IEvaluation): any {
    return this.httpClient.delete<IEvaluation>(this.apiURL + 'evaluacion/eliminar-evaluacion/' + evaluation.id);
  }
}
