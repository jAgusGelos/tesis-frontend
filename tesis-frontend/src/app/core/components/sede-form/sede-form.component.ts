import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISede } from '../../models/isede';

@Component({
  selector: 'app-sede-form',
  templateUrl: './sede-form.component.html',
  styleUrls: ['./sede-form.component.css']
})
export class SedeFormComponent implements OnInit {

  @Input() new = false;
  @Input() provinciaList = [];
  @Input() localidadList = [];
  @Input() sede: ISede = {
    id: '0',
    nombre: '',
    idProvincia: 0,
    nombreProvincia: '',
    idLocalidad: 0,
    nombreLocalidad: '',
    direccion: '',
    numero: 0
  };
  @Output() cancelEvent = new EventEmitter();
  @Output() newSedeEvent = new EventEmitter();
  @Output() editSedeEvent = new EventEmitter();
  @Output() getLocalidadesEvent = new EventEmitter();
  formSede: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.formSede = this.formBuilder.group({
      nombre: [this.sede.nombre, Validators.required],
      provincia: [this.sede.idProvincia, Validators.required],
      localidad: [this.sede.idLocalidad, Validators.required],
      calle: [this.sede.direccion, Validators.required],
      nroCalle: [this.sede.numero, [Validators.min(0), Validators.max(999999999)]]
    });
    this.getLocalidades(this.sede.idProvincia);
  }

  submit(): void {
    this.submitted = true;
    let nroCalle;
    if (this.formSede.controls.nroCalle.value === '' || this.formSede.controls.nroCalle.value === '0') {
      nroCalle = 0;
    } else {
      nroCalle = this.formSede.controls.nroCalle.value;
    }
    if (this.formSede.valid) {
      this.sede = {
        id: this.sede.id,
        nombre: this.formSede.controls.nombre.value,
        idProvincia: this.formSede.controls.provincia.value,
        nombreProvincia: this.formSede.controls.provincia.value,
        idLocalidad: parseInt(this.formSede.controls.localidad.value, 10),
        nombreLocalidad: this.formSede.controls.localidad.value,
        direccion: this.formSede.controls.calle.value,
        numero: nroCalle,
        };
      if (this.new) {
        this.newSedeEvent.emit(this.sede);
      } else {
        this.editSedeEvent.emit(this.sede);
      }
    } else {
      return;
    }
  }

  getLocalidades(idProvincia: number): void {
    this.getLocalidadesEvent.emit(idProvincia);
  }

  setLocalidad(): void {

  }

  cancel(): void {
    this.cancelEvent.emit();
  }

}
