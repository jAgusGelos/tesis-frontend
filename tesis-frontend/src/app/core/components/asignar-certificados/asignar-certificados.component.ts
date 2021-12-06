import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CertificateService } from '../../services/certificate.service';

@Component({
  selector: 'app-asignar-certificados',
  templateUrl: './asignar-certificados.component.html',
  styleUrls: ['./asignar-certificados.component.css']
})
export class AsignarCertificadosComponent implements OnInit {

  roles = [
    {
      id: 0,
      name: '--Seleccione--',
      ref: ''
    },
    {
      id: 1,
      name: 'Chair Principal',
      ref: 'idCertificadoEvaluadores'
    },
    {
      id: 2,
      name: 'Chair Secundario',
      ref: 'idCertificadoCharSec'
    },
    {
      id: 3,
      name: 'Evaluador',
      ref: 'idCertificadoEvaluadores'
    },
    {
      id: 4,
      name: 'Autor',
      ref: 'idCertificadoAutores'
    },
    {
      id: 6,
      name: 'Asistente',
      ref: 'idCertificadoAsistentes'
    },
    {
      id: 7,
      name: 'Expositores',
      ref: 'idCertificadoExpositores'
    }
  ];
  submitted = false

  @Input() certList: any[];
  @Output() cancelCertEmitter = new EventEmitter();
  formCert: FormGroup;

  constructor(private toastr: ToastrService,
              private certService: CertificateService,
              private formBuilder: FormBuilder   ) { }

  ngOnInit(): void {
    this.formCert = this.formBuilder.group({
      idCertificadoEvaluadores: ['', [Validators.required]],
      idCertificadoAsistentes: ['', [Validators.required]],
      idCertificadoAutores: ['', [Validators.required]],
      idCertificadoChairPpal: ['', [Validators.required]],
      idCertificadoCharSec: ['', [Validators.required]],
      idCertificadoExpositores: ['', [Validators.required]]
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.formCert.invalid) {
      this.toastr.error('Complete los campos requeridos.');
      return;
    }

    const rolesXCertificados = {
      idCertificadoEvaluadores: this.formCert.controls.idCertificadoEvaluadores.value,
      idCertificadoAsistentes: this.formCert.controls.idCertificadoAsistentes.value,
      idCertificadoAutores: this.formCert.controls.idCertificadoAutores.value,
      idCertificadoChairPpal: this.formCert.controls.idCertificadoChairPpal.value,
      idCertificadoCharSec: this.formCert.controls.idCertificadoCharSec.value,
      idCertificadoExpositores: this.formCert.controls.idCertificadoExpositores.value
    };

    this.certService.sendAllCertificates(rolesXCertificados).subscribe(
      (data) => {
        this.toastr.success('Certificados asignados correctamente');
        this.cancelCertEmitter.emit();
      },
      (error) => {
        this.toastr.error('Error al asignar certificados');
      }
    );
  }

  cancel(): void {
    this.cancelCertEmitter.emit();
  }





}
