import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ICongress } from '../models/ICongress';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class CongressService {

  private apiURL = environment.apiURL;
  idCongreso: number;
  constructor(private httpClient: HttpClient,
              private auth: AuthService
              ) {
                this.idCongreso = auth.getCongressId();
              }

  postCongress(congress: ICongress): any {
    const postCongress = {
      sede: congress.sede,
      año: congress.ano,
      nombre: congress.nombre,
      chairPrincipal: congress.chairPrincipal,
      coordLocal: congress.coordLocal
    };
    return this.httpClient.post<ICongress>(this.apiURL + 'congresos/crear-congreso/', postCongress);
  }

  getCongress(): any {
    return this.httpClient.get(this.apiURL + 'congresos/listaCongresosActivos/');
  }
  getCongressPublic(): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-congresos-publico/');
  }
  getCongressActivo(): any {
    return this.httpClient.get(this.apiURL + 'congresos/listaCongresosActivos/');
  }

  getCongressById(idCongress?: string): any {
    return this.httpClient.get(this.apiURL + 'congresos/consultaCongreso/?id=' + (idCongress || this.idCongreso));
  }


  getSedes(): any {
    return this.httpClient.get(this.apiURL + 'congresos/lista-sedes/');
  }

  putCongress(congress: ICongress): any {
    const putCongress = {
      nombre: congress.nombre,
      sede: congress.sede,
      chairPrincipal: congress.chairPrincipal,
      coordLocal: congress.coordLocal,
      año: congress.ano,
    };
    return this.httpClient.post<ICongress>(this.apiURL + 'congresos/editar-congreso/', putCongress);
  }

  deleteCongress(congress: ICongress): any {
    return this.httpClient.delete<ICongress>(this.apiURL + 'congresos/eliminar-congreso/?id=' + congress.id);
    // return this.httpClient.request('delete', this.apiURL + 'congresos/eliminar-congreso/',
    // {body: {id: congress.id}});
  }
}
