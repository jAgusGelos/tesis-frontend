import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICupon } from '../models/ICupon';

@Injectable({
  providedIn: 'root'
})
export class CuponService {

  private apiURL = environment.apiURL;

  constructor( private httpClient: HttpClient) { }

  getCupones(): any {
    return this.httpClient.get(this.apiURL + 'inscripciones/lista-cuponesDescuento/');
  }

  getCuponByCodigo(codigo: string): any {
    return this.httpClient.get(this.apiURL + 'inscripciones/devolver-cuponDescuento/?codigoCupon=' + codigo);
  }

  postCupon(cupon: ICupon): any {
    return this.httpClient.post(this.apiURL + 'inscripciones/crear-cuponDescuento/', cupon);
  }

  putCupon(cupon: ICupon): any {
    return this.httpClient.put(this.apiURL + 'inscripciones/editar-cuponDescuento/?codigoCupon=' + cupon.codigo, cupon);
  }

  deleteCupon(cupon: ICupon): any {
    return this.httpClient.delete(this.apiURL + 'inscripciones/eliminar-cuponDescuento/?codigoCupon=' + cupon.codigo);
  }

  verifyCupon(codigo: string): any {
    return this.httpClient.get(this.apiURL + 'inscripciones/verificar-cuponDescuento/?cuponDescuento=' + codigo);
  }

  validateCode(codigo: string): any {
    return this.httpClient.get(this.apiURL + 'inscripciones/verificar-codigoCupon/?cuponDescuento=' + codigo);
  }

}
