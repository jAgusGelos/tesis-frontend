import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEvaluation } from '../models/IEvaluation';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private apiURL = environment.apiURL;
  idCongreso: number;

  constructor(private httpClient: HttpClient,
              private auth: AuthService
              ) {
                this.idCongreso = this.auth.getCongressId();
               }

  postEvaluation(evaluation: any): any {
    const postItem = {
      idCongreso: this.idCongreso,
      nombre: evaluation.pregunta
    };
    return this.httpClient.post<IEvaluation>(this.apiURL + 'articulos/altaItemEvaluacion/', postItem);
  }

  getEvaluation(activos): any {
    return this.httpClient.get(this.apiURL + 'articulos/getItemsEvaluacion/?activos=' + activos);
  }

  putEvaluation(evaluation: any): any {
    const postItem = {
      id: evaluation.id,
      idCongreso: this.idCongreso,
      nombre: evaluation.pregunta
    };
    return this.httpClient.put<IEvaluation>(this.apiURL + 'articulos/editarItemEvaluacion/', postItem);
  }

  deleteEvaluation(evaluation: IEvaluation): any {
    return this.httpClient.delete<IEvaluation>(this.apiURL + 'articulos/eliminarItemEvaluacion/?idItem=' + evaluation.id);
  }

  getItemsEvaluacion(activos: number): any {
    return this.httpClient.get(this.apiURL + 'articulos/getItemsEvaluacion/?activos=' + activos);
  }
}
