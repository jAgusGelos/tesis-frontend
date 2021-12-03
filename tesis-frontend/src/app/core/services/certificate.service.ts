import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {


  private apiURL = environment.apiURL;
  idCongress: number;

  constructor(private httpClient: HttpClient,
              private auth: AuthService) {
    this.idCongress = auth.getCongressId();
     }

  getPictureFile(id: string): any {
    return this.httpClient.get(this.apiURL + 'certificados/getArchivoTemplate/?idCertificado=' + id, {responseType: 'arraybuffer'});
  }

  postCertificate(certificate: any): any {
    const formData = new FormData();
    formData.append('archivo', certificate.archivo);
    formData.append('nombre', certificate.nombre);
    formData.append('descripcion', certificate.desc);
    return this.httpClient.post<any>(this.apiURL + 'certificados/altaCertificado/', formData);
  }

  getCertificates(): any {
    return this.httpClient.get(this.apiURL + 'certificados/getCertificados/');
  }

  getDetails(id: any): any {
    return this.httpClient.get(this.apiURL + 'certificados/devolverDetallesCertificados/?idCertificado=' + id);
  }

  putCertificate(certificate: any): any {
    const formData = new FormData();
    formData.append('template', certificate.picture);
    formData.append('nombre', certificate.nombre);
    formData.append('descripcion', certificate.desc);
    formData.append('id', certificate.idCertificado);
    return this.httpClient.put<any>(this.apiURL + 'certificados/modifCertificado/?idCertificado=' + certificate.idCertificado, formData);
  }

  deleteCertificate(item: any): any {
    return this.httpClient.delete(this.apiURL + 'certificados/bajaCertificado/?idCertificado=' + item.id);
  }

  postplayCert(certificate: any): any {
    // id certificado
    // datos: {llave, valor}
    return this.httpClient.post<any>(this.apiURL + 'certificados/pruebaCertificadoParametrizado/', certificate);
  }

  postFinalCert(certificate: any): any {
    // para cada detalle dar el alta de detalle
    return this.httpClient.post<any>(this.apiURL + 'certificados/altaDetalleCertificado/', certificate);

  }

  sendAllCertificates(postBody: any): any {
    console.log(postBody);
    return ;
    return this.httpClient.post(this.apiURL + 'certificados/crearCertificadoMasivo/', {postBody, idCongreso: this.idCongress});
  }

}
