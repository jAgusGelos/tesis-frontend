import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPaper } from '../models/IPaper';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  postPaper(paper: IPaper): any {
    return this.httpClient.post<IPaper>(this.apiURL + 'paper/crear/', paper);
  }

  getPaper(): any {
    return this.httpClient.get(this.apiURL + 'paper/todos/');
  }

  getPaperFile(paper: IPaper): any {
    return this.httpClient.get(this.apiURL + 'consulta-archivo/' + paper.id)
  }

  putPaper(paper: IPaper): any {
    return this.httpClient.put<IPaper>(this.apiURL + 'paper/modificar/' + paper.id, paper);
  }

  deletePaper(paper: IPaper): any {
    return this.httpClient.delete<IPaper>(this.apiURL + 'paper/delete/' + paper.id);
  }

  checkAutor(mail: string): any {
    return this.httpClient.post<IPaper>(this.apiURL + 'autor/check/', mail);
  }

  sendEmail(mail: string): any {
    return this.httpClient.post(this.apiURL + '/sendInvit', mail);
  }


  getEvaluationDetails(id: any): any{
    return this.httpClient.get(this.apiURL + '/articulos/consultaDetalleEvaluacion/' + id);
  }

  getQuestions(id: any): any{
    return this.httpClient.get(this.apiURL + 'getItemEvaluacion/' + id);
  }

  
}

