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
    formData.append('archivo', certificate.picture);
    formData.append('nombre', certificate.nombre);
    formData.append('desc', certificate.desc);

    return this.httpClient.post<any>(this.apiURL + 'certificados/altaCertificado/', formData);
  }

  getCertificates(): any {
    return this.httpClient.get(this.apiURL + 'certificados/getCertificados/');
  }

  putCertificate(certificate: any): any {
    const formData = new FormData();
    formData.append('archivo', certificate.picture);
    formData.append('nombre', certificate.nombre);
    formData.append('desc', certificate.desc);
    formData.append('idCertificado', certificate.idCertificado);
    return this.httpClient.put<any>(this.apiURL + 'certificados/modifCertificado/?idCertificado=' + certificate.idCertificado, formData);
  }

  deleteCertificate(id: string): any {
    return this.httpClient.get(this.apiURL + 'certificados/bajaCertificado/?idCertificado=' + id);
  }

}
