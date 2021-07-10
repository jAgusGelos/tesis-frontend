import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICongress } from '../../models/ICongress';

@Component({
  selector: 'app-congress-form',
  templateUrl: './congress-form.component.html',
  styleUrls: ['./congress-form.component.css']
})
export class CongressFormComponent implements OnInit {

  @Input() congress: ICongress = {
    nombre: '',
    sede: '',
    simposios: [],
    chairPrincipal: '',
    coordLocal: '',
    fechaInCongreso: new Date(),
    fechaFinCongreso: new Date(),
    fechaLimPapers: new Date(),
    fechaProrrogaPapers: new Date(),
    fechaFinEvaluacion: new Date(),
    fechaFinReEv: new Date(),
    aulas: [],
    modalidad: ''
  };
  formCongress: FormGroup;
  submitted = false;
  // Esto hay que pedirselo al back.
  simposios = [{id: 0, nombre: 'Tematica 1'}, {id: 1, nombre: 'Tematica 2'}, {id: 3, nombre: 'Tematica 3'}];
  aulas = [{id: 0, nombre: 'Aula 1', capacidad: 250}, {id: 0, nombre: 'Aula 2', capacidad: 200}];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCongress = this.formBuilder.group({
      nombre: [this.congress.nombre, Validators.required],
      sede: [this.congress.sede, Validators.required],
      simposios: [this.congress.simposios, Validators.required],
      chairPrincipal: [this.congress.chairPrincipal, Validators.required],
      coordLocal: [this.congress.coordLocal, Validators.required],
      fechaInCongreso: [this.congress.fechaInCongreso, Validators.required],
      fechaFinCongreso: [this.congress.fechaFinCongreso, Validators.required],
      fechaLimPapers: [this.congress.fechaLimPapers, Validators.required],
      fechaProrrogaPapers: [this.congress.fechaProrrogaPapers, Validators.required],
      fechaFinEvaluacion: [this.congress.fechaFinEvaluacion, Validators.required],
      fechaFinReEv: [this.congress.fechaFinReEv, Validators.required],
      aulas: [this.congress.aulas, Validators.required],
      modalidad: [this.congress.modalidad, Validators.required]
    });

  }

}
