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

  getPaperById(id): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultaArticuloXId/?idArticulo=' + id);
  }

  getPaperFile(id): any {
    return this.httpClient.get(this.apiURL + 'articulos/consulta-archivo/?idArticulo=' + id, {responseType: 'arraybuffer'});
  }

  putPaper(paper: IntPaper): any {
    const formData = new FormData();
    formData.append('idArticulo', paper.id);
    formData.append('articulo', paper.archivo);
    formData.append('idCongreso', this.idCongress.toString());
    formData.append('autores', paper.autores.toString());
    formData.append('responsable', paper.responsable);
    formData.append('simposio', paper.simposio);
    formData.append('nombre', paper.nombre);
    return this.httpClient.put<IntPaper>(this.apiURL + 'articulos/editarEntrega/', formData);
  }

  sendPaper(paper: any): any {
    return this.httpClient.post<IntPaper>(this.apiURL + 'articulos/enviarEntrega/', {idArticulo: paper.id});
  }

  finalPaper(paper: any): any {
    const formData = new FormData();
    formData.append('articulo', paper.archivo);
    formData.append('idArticulo', paper.id);
    formData.append('idCongreso', this.idCongress.toString());
    formData.append('autores', paper.autores.toString());
    formData.append('responsable', paper.responsable);
    formData.append('simposio', paper.simposio);
    formData.append('nombre', paper.nombre);
    return this.httpClient.post<any>(this.apiURL + 'articulos/realizarEntregaFinal/', formData);
  }

  deletePaper(paper: IntPaper): any {
    return this.httpClient.delete<IntPaper>(this.apiURL + 'articulos/deleteEntregaArticulo/?idArticulo=' + paper.id);
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

  getSimposiosActivosId(idCongress: any): any {
    const url = 'congresos/lista-simposiosxcongreso/?idCongreso=';
    return this.httpClient.get(this.apiURL + url + idCongress);
  }

  getEvaluationDetails(id: any): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultaDetalleEvaluacion/?idArticulo=' + id);
  }

  getItemsEv(): any {
    return this.httpClient.get(this.apiURL + 'articulos/getItemsEvaluacion/');
  }

  getEvaluadoresXPaper(id): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultarEvaluadoresArticulo/?idArticulo=' + id);
  }

  getPapersXSimposio(idSimposio, idEstado): any {
    return this.httpClient.get(this.apiURL + 'articulos/consultarArticulosXSimposio/?idSimposio=' + idSimposio + '&idEstado=' + idEstado);
    /*
    0 No filtrar por estado
    1 Creado
    2 Enviado
    3 Asignado
    4 Corregido
    5 ParaReentregar
    6 Aprobado
    7 Rechazado
    8 AprobadoReentrega
    9 RechazadoReentrega
    */
  }

  getPapersXChair(): any {
    return this.httpClient.get(this.apiURL + 'articulos/consulta-articulosXChair/');
  }

  calificarPaper(idArticulo, calificacion, observacion): any {
    const paperCalification = {
      idArticulo,
      calificacion,
      observacion
    };
    return this.httpClient.put(this.apiURL + 'articulos/calificarArticulo/', paperCalification);
  }
}

