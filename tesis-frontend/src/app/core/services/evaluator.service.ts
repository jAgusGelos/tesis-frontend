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
  private idCongress: number;

  constructor(private httpClient: HttpClient,
              private auth: AuthService
              ) {
                this.idUser = auth.getUserId();
                this.idCongress = auth.getCongressId();
               }

  postEvaluator(idUsuarios): any {
    return this.httpClient.post(this.apiURL + 'articulos/asignarRolEvaluador/', idUsuarios);
  }

  getEvaluators(activos): any {
    // return this.httpClient.request('get', this.apiURL + 'articulos/lista-evaluadores/',
    // {body: {is_active: true}});
    return this.httpClient.get(this.apiURL + 'articulos/consultarEvaluadores/?activos=' + activos);
  }

  getEvaluatorsAll(): any {
    return this.httpClient.get(this.apiURL + 'articulos/getEvaluadoresFueraSimposio/');
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

  calificarEvaluador(evCalification: any): any {
    return this.httpClient.put(this.apiURL + 'evaluador/calificarEvaluador/', evCalification);
  }

  postEvaluatorMassive(item: any): any {
    const postItem = item.map((x: any) => {
      return {
        idEvaluadores: [x.idEval1, x.idEval2, x.idEval3],
        articulo: x.idArticulo,
        idCongreso: this.idCongress
      };
    });
    console.log(postItem);

    return this.httpClient.post(this.apiURL + 'articulos/asignarArticuloEvaluadorMasivo/', postItem);

  }
/* Ver si está el método... */
  cancelarEvaluationPaper(item:any): any{
    return this.httpClient.delete(this.apiURL + 'articulos/rechazar-evaluacion',item);
  }
  acceptEvaluationPaper(item:any): any{
    return this.httpClient.put(this.apiURL + 'articulos/aceptar-evaluacion',item);
  }
}
