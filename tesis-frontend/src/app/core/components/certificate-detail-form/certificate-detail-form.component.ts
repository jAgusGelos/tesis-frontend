import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-certificate-detail-form',
  templateUrl: './certificate-detail-form.component.html',
  styleUrls: ['./certificate-detail-form.component.css']
})
export class CertificateDetailFormComponent implements OnInit {


  @Input() certList: any[];
  @Output() verGrafoEvent = new EventEmitter();
  @Output() guardarGrafoEvent = new EventEmitter();
  @Output() cancelCertEvent = new EventEmitter();

  formCert: FormGroup;

  constructor(private formGroup: FormBuilder) { }

  imagen = '';
  submitted = false;


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
      dniY: ['']
    });
  }

  checkForm(): boolean {
    this.submitted = true;
    if (this.formCert.invalid) {
      return false;
    }
    return true;
  }

  verGrafico(e: any): void {
    if (this.checkForm()) {
      this.verGrafoEvent.emit(this.formCert);
    }
  }

  guardarCambios(e: any): void {
    if (this.checkForm()) {
      this.guardarGrafoEvent.emit(this.formCert);
    }
  }

  cancelar(): void {
    this.cancelCertEvent.emit();
  }
}
