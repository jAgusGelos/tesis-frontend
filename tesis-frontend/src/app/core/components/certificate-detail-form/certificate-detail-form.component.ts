import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CertificateService } from '../../services/certificate.service';

@Component({
  selector: 'app-certificate-detail-form',
  templateUrl: './certificate-detail-form.component.html',
  styleUrls: ['./certificate-detail-form.component.css']
})
export class CertificateDetailFormComponent implements OnInit {


  @Input() cert: any;
  @Output() verGrafoEvent = new EventEmitter();
  @Output() guardarGrafoEvent = new EventEmitter();
  @Output() cancelCertEvent = new EventEmitter();

  formCert: FormGroup;

  constructor(private formGroup: FormBuilder,
              private certService: CertificateService,
              private toastr: ToastrService) { }

  imagen = '';
  submitted = false;
  loading = true;
  fonts = [
    {name: 'Arial', value: 'arial.ttf'},
    {name: 'Calibri', value: 'calibrii.ttf'},
    {name: 'Arial Black', value: 'ariblk.ttf'},
    {name: 'Bahnschrift', value: 'bahnschrift.ttf'},
    {name: 'Cambria', value: 'cambria.ttc'},
    {name: 'Comic Sans MS', value: 'cambria.ttc'},
    {name: 'Franklin Gothic Medium', value: 'framd.ttf'},
    {name: 'Georgia', value: 'georgia.ttf'},
    {name: 'Verdana', value: 'verdana.ttf'},
    {name: 'Trebuchet MS', value: 'trebuc.ttf'}
  ];

  fontsSize = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];


  ngOnInit(): void {
    this.formCert = this.formGroup.group({
      nombre: ['', Validators.required],
      nombreX: ['', Validators.required],
      nombreY: ['', Validators.required],
      apellido: ['', Validators.required],
      apellidoX: ['', Validators.required],
      apellidoY: ['', Validators.required],
      dni: [''],
      dniX: [''],
      dniY: [''],
      fontSize: ['60'],
      fontFamily: ['arial.ttf']
    });
    this.certService.postplayCert({idCertificado: this.cert.id, datos: []}).subscribe((res: any) => {
      this.imagen = res.data[0];
      this.loading = false;
    });
  }


  checkForm(): boolean {
    this.submitted = true;
    if (this.formCert.invalid) {
      this.toastr.warning(' Por favor, complete todos los datos');
      return false;
    }
    return true;
  }

  getOpciones(): any {
    const form = this.formCert.controls;
    return {
      idCertificado: this.cert.id,
      datos: [
        {
          tipoLetra: form.fontFamily.value,
          tamañoLetra: +form.fontSize.value,
          posX: +form.nombreX.value,
          posY: +form.nombreY.value,
          valor: form.nombre.value
        },
        {
          tipoLetra: form.fontFamily.value,
          tamañoLetra: +form.fontSize.value,
          posX: +form.apellidoX.value,
          posY: +form.apellidoY.value,
          valor: form.apellido.value
        },
        {
          tipoLetra: form.fontFamily.value,
          tamañoLetra: +form.fontSize.value,
          posX: +form.dniX.value,
          posY: +form.dniY.value,
          valor: form.dni.value
        },
      ]

    };
  }

  verGrafico(): void {
    if (this.checkForm()) {
      this.loading = true;
      const opciones = this.getOpciones();
      this.certService.postplayCert(opciones).subscribe((res: any) => {
        this.imagen = res.data[0];
        this.loading = false;
      });
    }
  }

  guardarCambios(): void {
    if (this.checkForm()) {
      this.guardarGrafoEvent.emit(this.formCert);
    }
  }

  cancelar(): void {
    this.cancelCertEvent.emit();
  }
}
