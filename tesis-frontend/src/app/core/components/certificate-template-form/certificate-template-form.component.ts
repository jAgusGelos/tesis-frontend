import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CertificateService } from '../../services/certificate.service';

@Component({
  selector: 'app-certificate-template-form',
  templateUrl: './certificate-template-form.component.html',
  styleUrls: ['./certificate-template-form.component.css']
})
export class CertificateTemplateFormComponent implements OnInit {

  @Input() cert: any;
  @Output() certEmitter = new EventEmitter<any>();
  @Output() cancelCert = new EventEmitter();
  formCertificate: FormGroup;
  submitted = false;
  autoresList = [];
  fileToUpload: File | null = null;


  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private certService: CertificateService
              ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formCertificate = this.formBuilder.group({
      nombre: [this.cert.nombre, [Validators.required]],
      desc: [this.cert.desc, [Validators.required]],
      archivo: [null],
    });

  }

  cancel(): void {
    this.cancelCert.emit();
  }

  nuevoArchivo(): void {
    this.cert.archivo = '';
  }


  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

  submit(): void {
    this.submitted = true;
    if (this.formCertificate.invalid || this.fileToUpload === null ) {
      this.toastr.warning('Por favor complete todos los datos.');
      return;
    }
    this.cert = {
      archivo: this.fileToUpload,
      idCertificado: this.cert.idCertificado,
      nombre: this.formCertificate.controls.nombre.value,
      desc: this.formCertificate.controls.desc.value
    };
    this.certEmitter.emit(this.cert);
  }

  getArchivo(): void {
   this.certService.getPictureFile(this.cert.id).subscribe((res: any) => {
      const archivo: ArrayBuffer = res;
      const blob = new Blob([archivo], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  }

}
