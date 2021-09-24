import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICupon } from '../../models/icupon';

@Component({
  selector: 'app-cupon-form',
  templateUrl: './cupon-form.component.html',
  styleUrls: ['./cupon-form.component.css']
})
export class CuponFormComponent implements OnInit {

  @Input() new = false;
  @Input() codeIsValid = false;
  @Input() cupon: ICupon = {
    codigo: '',
    porcentaje: 0,
    idTarifa: '',
    usosRestantes: 0
  };
  @Input() tarifaList = [{id: '1', nombre: 'Tarifa 1', precio: 100}];
  @Output() cancelEvent = new EventEmitter();
  @Output() newCuponEvent = new EventEmitter();
  @Output() editCuponEvent = new EventEmitter();
  @Output() verificarCuponEvent = new EventEmitter();
  selectedTarifa = null;
  formCupon: FormGroup;
  submitted = false;
  precioTarifa = 0;
  precioDescontado = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formCupon = this.formBuilder.group({
      codigo: [this.cupon.codigo, [Validators.required, Validators.pattern('a-zA-Z0-9')]],
      tarifa: [this.cupon.idTarifa, Validators.required], //CAMBIAR POR NOMBRE
      precioTarifa: [{value: this.precioTarifa, disabled: true}],
      precioDescontado: [{value: this.precioDescontado, disabled: true}],
      porcentajeDescuento: [this.cupon.porcentaje, [Validators.required, Validators.min(0), Validators.max(100)]],
      usosRestantes: [this.cupon.usosRestantes, [Validators.required, Validators.min(0)]],
    });
  }

  submit() {
    this.submitted = true;
    if (!this.verificarCupon(this.cupon)) {
      return;
    }
    if (this.formCupon.valid) {
      this.cupon = {
        codigo: this.formCupon.controls.codigo.value,
        idTarifa: this.selectedTarifa.id,
        porcentaje: this.formCupon.controls.porcentajeDescuento.value,
        usosRestantes: this.formCupon.controls.usosRestantes.value,
        };
      if (this.new) {
        this.newCuponEvent.emit(this.cupon);
      } else {
        this.editCuponEvent.emit(this.cupon);
      }
    } else {
      return;
    }
  }

  setPrices(tarifa) {
    this.selectedTarifa = tarifa;
    this.precioTarifa = this.selectedTarifa.precio;
    this.precioDescontado = this.precioTarifa * (this.formCupon.controls.porcentajeDescuento.value / 100)
  }

  verificarCupon(cupon) {
    this.verificarCuponEvent.emit(cupon);
    let span = document.getElementById('code-valid');
    if (this.formCupon.controls.codigo.value == '') {
      span.className = "form-text text-danger";
      span.textContent = "Ingrese un código para el cupón.";
      return false;
    }
    if (this.codeIsValid) {
      span.className = "form-text text-success";
      span.textContent = "Código válido.";
      return true;
    } else {
      span.className = "form-text text-danger";
      span.textContent = "Ya existe un cupón con ese código.";
      return false
    };
  }

  cancel() {
    this.cancelEvent.emit();
  }
}
