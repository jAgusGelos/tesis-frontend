import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEvaluator } from '../models/IEvaluator';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluatorService {

  private apiURL = environment.apiURL;
  private idUser: number;

  constructor(private httpClient: HttpClient,
              private auth: AuthService
              ) {
                this.idUser = auth.getUserId();
               }

  postEvaluator(evaluator: string): any {
    return this.httpClient.post(this.apiURL + 'articulos/crear-evaluador/', evaluator);
  }

  getEvaluators(): any {
    // return this.httpClient.request('get', this.apiURL + 'articulos/lista-evaluadores/',
    // {body: {is_active: true}});
    return this.httpClient.get(this.apiURL + 'articulos/lista-evaluadores/?is_active=True');
  }

  getEvaluatorsSimposio(): any {
    return this.httpClient.get(this.apiURL + 'articulos/getEvaluadoresSimposio/');
  }

  getEvaluatorsGroup(): any {
    return this.httpClient.get(this.apiURL + 'articulos/getPoolEvaluadores/');
  }

  postEvaluatorGroup(id: number): any {
    return this.httpClient.post(this.apiURL + 'articulos/asignarPoolEvaluadores/', {evaluadores: [+id]});
  }

  deleteEvaluatorGroup(id: number): any {
    return this.httpClient.delete(this.apiURL + 'articulos/eliminarEvaluadorPoolEvaluadores/?idEvaluador=' + id);
  }

  getEvaluatorById(id: string): any {
    return this.httpClient.get(this.apiURL + 'evaluador/consultarEvaluador/' + id);
  }

  putEvaluator(evaluator: IEvaluator): any {
    return this.httpClient.put<IEvaluator>(this.apiURL + 'articulos/modificar/' + evaluator.id, evaluator);
  }

  deleteEvaluator(evaluator: IEvaluator): any {
    return this.httpClient.delete<IEvaluator>(this.apiURL + 'evaluador/eliminar-evaluador/' + evaluator.id);
  }

  calificarEvaluador(evCalification: any) {
    return this.httpClient.put(this.apiURL + 'evaluador/calificarEvaluador/', evCalification);
  }
}
