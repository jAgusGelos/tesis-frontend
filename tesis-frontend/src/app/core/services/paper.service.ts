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

  postPaper(paper: any): any {
    const formData = new FormData();
    formData.append('articulo', paper.archivo);
    formData.append('idCongreso', this.idCongress.toString());
    formData.append('autores', paper.autores.toString());
    formData.append('responsable', paper.responsable);
    formData.append('simposio', paper.simposio);
    formData.append('nombre', paper.nombre);
    return this.httpClient.post<any>(this.apiURL + 'articulos/realizarEntrega/', formData);
  }

  getPaper(): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultaArticuloXResponsable/');
  }

  getPaperFile(paper: IntPaper): any {
    return this.httpClient.get(this.apiURL + 'consulta-archivo/' + paper.id);
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
    return this.httpClient.get(this.apiURL + 'api/verificarUsuario/?email=' + mail);
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

