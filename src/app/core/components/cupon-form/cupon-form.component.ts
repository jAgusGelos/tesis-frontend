import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICupon } from '../../models/Icupon';
import { ITarifa } from '../../models/ITarifa';

@Component({
  selector: 'app-cupon-form',
  templateUrl: './cupon-form.component.html',
  styleUrls: ['./cupon-form.component.css']
})
export class CuponFormComponent implements OnInit {

  @Input() new = false;
  @Input() cupon: ICupon = {
    codigo: '',
    porcentajeDesc: 0,
    idTarifa: '',
    nombreTarifa: '',
    usosRestantes: 0
  };
  @Input() tarifaList: ITarifa[];
  @Input() codeValidation = '';
  @Output() cancelEvent = new EventEmitter();
  @Output() newCuponEvent = new EventEmitter();
  @Output() editCuponEvent = new EventEmitter();
  @Output() validarCodigoCuponEvent = new EventEmitter();
  formCupon: FormGroup;
  submitted = false;
  precioTarifa = 0;
  precioDescontado = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formCupon = this.formBuilder.group({
      codigo: [this.cupon.codigo, [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      tarifa: [this.cupon.idTarifa, Validators.required],
      porcentajeDescuento: [this.cupon.porcentajeDesc, [Validators.required, Validators.min(0), Validators.max(100)]],
      usosRestantes: [this.cupon.usosRestantes, [Validators.required, Validators.min(0)]],
    });
  }

  submit(): void {
    this.submitted = true;
    this.cupon = {
      codigo: this.formCupon.controls.codigo.value,
      idTarifa: this.formCupon.controls.tarifa.value,
      nombreTarifa: '',
      porcentajeDesc: this.formCupon.controls.porcentajeDescuento.value,
      usosRestantes: this.formCupon.controls.usosRestantes.value,
      };
    if (this.formCupon.valid) {
      if (this.new) {
        this.validarCodigo();
        if (this.codeValidation === '200') {
          this.newCuponEvent.emit(this.cupon);
        } else {
          return;
        }
      } else {
        this.editCuponEvent.emit(this.cupon);
      }
    } else {
      return;
    }
  }

  validarCodigo(): boolean {
    const code = this.formCupon.controls.codigo.value;
    const span = document.getElementById('code-valid');
    if (code === '') {
      span.className = 'form-text text-danger';
      span.textContent = 'Ingrese un código para el cupón.';
      return false;
    } else {
      this.validarCodigoCuponEvent.emit(code);
    }
  }

  cancel(): void {
    this.cancelEvent.emit();
  }
}
