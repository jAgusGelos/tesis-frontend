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

  postPaperEval(paperEval: IEvalPaper): any {
    return this.httpClient.post<IEvalPaper>(this.apiURL + 'paperEval/evaluar/', paperEval);
  }

  getPaperEval(): any {
    return this.httpClient.get(this.apiURL + 'paperEval/lista-paperEval/');
  }

  getTest(): any {
    return this.httpClient.get(this.apiURL + 'paperEval/evaluacion/');
  }
}
