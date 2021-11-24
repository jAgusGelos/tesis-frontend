import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CertificateService } from 'src/app/core/services/certificate.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  constructor(private certService: CertificateService,
              private toastr: ToastrService) { }

  cert = {
    idCertificado: null,
    nombre: '',
    desc: '',
    imagen: ''
  };
  certList = [];
  edit = false;
  new = false;
  list = false;
  form = false;
  game = false;

  ngOnInit(): void {
    this.getCertificates();
  }

  getCertificates(): void {
    this.certService.getCertificates().subscribe((res: any) => {
      this.certList = res.data[0];
      this.toggleEdit();
    });
  }

  submit(item: any): void {
    console.log(item);
    if (item.idCertificado) {
      this.certService.putCertificate(item).subscribe((res: any) => {
        this.getCertificates();
      });
    } else {
      this.certService.postCertificate(item).subscribe((res: any) => {
        this.getCertificates();
      },
      (err: any) => console.log(err));
    }
  }



  deleteCertificate(id): void {
    this.certService.deleteCertificate(id).subscribe((res: any) => {
      this.toastr.success('Certificado Eliminado');
      this.getCertificates();
    });
  }

  newCert(): void {
    this.list = false;
    this.form = true;
    this.cert = {
    idCertificado: null,
    nombre: '',
    desc: '',
    imagen: ''
  };
    this.new = true;
  }

  editCert(item: any): void {
    this.cert = item;
    this.form = true;
    this.list = false;
    this.game = false;
  }

  playCertEvent(item: any): void {
    this.certService.postplayCert({idCertificado: item.id, datos: []}).subscribe((res: any) => {
    });
    this.cert = {
      ...item,
    };
    this.game = true;
    this.form = false;
    this.list = false;
  }

  toggleEdit(): void {
    this.list = true;
    this.form = false;
    this.game = false;
  }

  guardarGrafo(item: any): void {
    console.log(item);
  }

  verGrafo(item: any): void {
    console.log('Ver', item);
  }

}
