import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluateService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient,
              ) { }


  postEvaluation(evaluation: any): any {
    return this.httpClient.post<any>(this.apiURL + 'evaluar/evaluacion/', evaluation);
  }

  // Trae la evaluación
  getEvaluation(): any {
    return this.httpClient.get(this.apiURL + 'evaluar/lista-evaluar/');
  }

  // Trae los paper a evaluar
   getPaper(): any {
    return this.httpClient.get(this.apiURL + 'evaluar/lista-evaluar/');
  }

  deleteEvaluation(evaluation: any): any {
    return this.httpClient.delete<any>(this.apiURL + 'evaluar/eliminar-evaluacion/' + evaluation.id);
  }
}
