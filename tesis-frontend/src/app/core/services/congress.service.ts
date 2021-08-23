import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ICongress } from '../models/ICongress';



@Injectable({
  providedIn: 'root'
})
export class CongressService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient,
              ) { }

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

  getCongressActivo(): any {
    return this.httpClient.get(this.apiURL + 'congresos/listaCongresosActivos/');
  }

  getCongressById(congress: ICongress): any {
    return this.httpClient.get(this.apiURL + 'congresos/consultaCongreso/' + congress.id);
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
