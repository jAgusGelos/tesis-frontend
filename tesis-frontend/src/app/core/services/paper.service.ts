import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IntPaper } from '../models/IntPaper';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  private apiURL = environment.apiURL;
  idCongress: number;

  constructor(private httpClient: HttpClient,
              private auth: AuthService) {
              this.idCongress = auth.getCongressId();
               }

  postPaper(paper: IntPaper): any {
    const paperPost = {
      idCongreso: this.idCongress,
      archivo: paper.archivo,
      autores: paper.autores,
      responsable: paper.responsable,
      simposio: paper.simposio
    };
    return this.httpClient.post<IntPaper>(this.apiURL + '/articulos/realizarEntrega/', paperPost);
  }

  getPaper(): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultaArticuloXAutor/');
  }

  getPaperFile(paper: IntPaper): any {
    return this.httpClient.get(this.apiURL + 'consulta-archivo/' + paper.id)
  }

  putPaper(paper: IntPaper): any {
    const paperPost = {
      idArticulo: paper.id,
      idCongreso: this.idCongress,
      archivo: paper.archivo,
      autores: paper.autores,
      responsable: paper.responsable,
      simposio: paper.simposio
    };
    return this.httpClient.put<IntPaper>(this.apiURL + 'paper/modificar/' + paper.id, paper);
  }

  deletePaper(paper: IntPaper): any {
    return this.httpClient.delete<IntPaper>(this.apiURL + 'paper/delete/' + paper.id);
  }

  checkAutor(mail: string): any {
    return this.httpClient.post<IntPaper>(this.apiURL + 'autor/check/', mail);
  }

  sendEmail(mail: string): any {
    return this.httpClient.post(this.apiURL + '/sendInvit', mail);
  }


  getSimposiosActivos(): any {
    const url = 'congresos/lista-simposiosxcongreso/?idCongreso=';
    return this.httpClient.get(this.apiURL + url + this.idCongress);
  }


  getEvaluationDetails(id: any): any{
    return this.httpClient.get(this.apiURL + '/articulos/consultaDetalleEvaluacion/' + id);
  }

  getQuestions(id: any): any{
    return this.httpClient.get(this.apiURL + 'getItemEvaluacion/' + id);
  }
}

