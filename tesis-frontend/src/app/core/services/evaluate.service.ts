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
  

  /**
   * Evalua un paper.
   * @param evaluation 
   * @returns 
   */
  postEvaluation(evaluation: any): any {
    return this.httpClient.post<any>(this.apiURL + 'evaluar/evaluacion/', evaluation);
  }

  /**
   * 
   * @returns Evaluación modelo.
   */
  getEvaluation(): any {
    return this.httpClient.get(this.apiURL + 'evaluar/lista-evaluar/');
  }

  /**
   * 
   * @returns Papers a evaluar.
   */
   getPaper(): any {
    return this.httpClient.get(this.apiURL + 'evaluar/lista-evaluar/');
  }

  /**
   * Cancela una evaluación ya aceptada.
   * @param evaluation 
   * @returns 
   */
  deleteEvaluation(evaluation: any): any {
    return this.httpClient.delete<any>(this.apiURL + 'evaluar/eliminar-evaluacion/' + evaluation.id);
  }
}
