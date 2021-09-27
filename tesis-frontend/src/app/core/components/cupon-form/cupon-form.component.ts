import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICupon } from '../../models/icupon';
import { ITarifa } from '../../models/ITarifa';

@Component({
  selector: 'app-cupon-form',
  templateUrl: './cupon-form.component.html',
  styleUrls: ['./cupon-form.component.css']
})
export class CuponFormComponent implements OnInit, OnChanges {

  @Input() new = false;
  @Input() codeIsValid = false;
  @Input() cupon: ICupon = {
    codigo: '',
    porcentaje: 0,
    idTarifa: '',
    usosRestantes: 0
  };
  @Input() selectedTarifa: ITarifa = {
    id: '0',
    idCongreso: '0',
    nombre: '',
    precio: 0,
    fechaDesde: '',
    fechaHasta: ''
  };
  @Input() tarifaList: ITarifa[];
  @Output() cancelEvent = new EventEmitter();
  @Output() newCuponEvent = new EventEmitter();
  @Output() editCuponEvent = new EventEmitter();
  @Output() verificarCuponEvent = new EventEmitter();
  @Output() obtenerTarifaEvent = new EventEmitter();
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
      precioTarifa: [this.precioTarifa, {value: this.precioTarifa, disabled: true}],
      precioDescontado: [this.precioDescontado, {value: this.precioDescontado, disabled: true}],
      porcentajeDescuento: [this.cupon.porcentaje, [Validators.required, Validators.min(0), Validators.max(100)]],
      usosRestantes: [this.cupon.usosRestantes, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnChanges() {
    console.log(this.selectedTarifa);
    this.setPrices();
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

  setPrices() {
    this.precioTarifa = this.selectedTarifa.precio;
    this.precioDescontado = this.precioTarifa * (this.formCupon.controls.porcentajeDescuento.value / 100);
    console.log('precioTarifa: ' + this.precioTarifa);
    console.log('porcentajeDescuento: ' + this.formCupon.controls.porcentajeDescuento.value);
  }

  setTarifa() {
    var select = <HTMLSelectElement>document.getElementById('select-tarifas');
    var idTarifa: any = select.options[select.selectedIndex].value;
    this.obtenerTarifaEvent.emit(idTarifa);
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
