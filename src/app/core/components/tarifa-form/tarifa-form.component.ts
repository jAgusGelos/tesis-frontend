import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITarifa } from '../../models/ITarifa';

@Component({
  selector: 'app-tarifa-form',
  templateUrl: './tarifa-form.component.html',
  styleUrls: ['./tarifa-form.component.css']
})
export class TarifaFormComponent implements OnInit {

  @Input() tarifa = {
    id: '0',
    idCongreso: '0',
    nombre: '',
    precio: 0,
    fechaDesde: '',
    fechaHasta: ''
  };
  @Output() cancelEvent = new EventEmitter();
  @Output() newTarifaEvent = new EventEmitter();
  @Output() editTarifaEvent = new EventEmitter();
  @Input() new = false;
  formTarifa: FormGroup;
  submitted = false;
  datesValid = true;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.formTarifa = this.formBuilder.group({
      nombre: [this.tarifa.nombre, Validators.required],
      precio: [this.tarifa.precio, [Validators.required, Validators.min(0), Validators.max(999999999)]],
      fechaDesde: [this.invertConvertDateFormat(this.tarifa.fechaDesde.toString()), Validators.required],
      fechaHasta: [this.invertConvertDateFormat(this.tarifa.fechaHasta.toString()), Validators.required]
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.formTarifa.controls.fechaDesde.value > this.formTarifa.controls.fechaHasta.value) {
      this.datesValid = false;
      return;
    }

    if (this.formTarifa.valid) {
      this.tarifa = {
        id: this.tarifa.id,
        idCongreso: this.tarifa.idCongreso,
        nombre: this.formTarifa.controls.nombre.value,
        precio: this.formTarifa.controls.precio.value,
        fechaDesde: this.convertDateFormat(this.formTarifa.controls.fechaDesde.value),
        fechaHasta: this.convertDateFormat(this.formTarifa.controls.fechaHasta.value)
        };
      if (this.new) {
        this.newTarifaEvent.emit(this.tarifa);
      } else {
        this.editTarifaEvent.emit(this.tarifa);
      }
    } else {
      return;
    }
  }

  convertDateFormat(date: string): any {
    const info = date.split('-').reverse().join('/') + ' 00:00:00';
    return info;
  }

  invertConvertDateFormat(date: string): any {
    date = date.split('T')[0];
    return date;
  }

  cancel(): void {
    this.cancelEvent.emit();
  }
}
