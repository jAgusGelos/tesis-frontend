import { Component, OnInit } from '@angular/core';
import { CertificateService } from 'src/app/core/services/certificate.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  constructor(private certService: CertificateService) { }

  cert = {
    idCertificado: null,
    nombre: '',
    desc: ''
  };
  certList = [];
  edit = false;
  new = false;

  ngOnInit(): void {
  }

  getCertificates(): void {
    this.certService.getCertificates().subscribe((res: any) => {
      this.certList = res.data;
    });
  }

  submit(item: any): void {
    if (item.idCertificado !== null) {
      console.log('put', item);
      return;
      this.certService.putCertificate(item).subscribe((res: any) => {
        this.getCertificates();
        this.toggleEdit();
      });
    } else {
      console.log('post', item);
      return;
      this.certService.postCertificate(item).subscribe((res: any) => {
        this.toggleEdit();
        this.getCertificates();
      },
      (err: any) => console.log(err));
    }
  }

  deleteCertificate(id): void {
    this.certService.deleteCertificate(id).subscribe((res: any) => {
      this.getCertificates();
    });
  }

  newCert(): void {
    this.cert = {
    idCertificado: null,
    nombre: '',
    desc: ''
  };
    this.new = true;
    this.toggleEdit();
  }

  editCert(item: any): void {
    this.cert = item;
    this.new = false;
    this.toggleEdit();
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

}
