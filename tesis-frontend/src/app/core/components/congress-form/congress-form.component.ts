import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICongress } from '../../models/ICongress';


@Component({
  selector: 'app-congress-form',
  templateUrl: './congress-form.component.html',
  styleUrls: ['./congress-form.component.css']
})
export class CongressFormComponent implements OnInit {


  // Tiene que dar Nombre - Sede - Año - Email CP CL -
  @Input() congress: ICongress = {
    id: '',
    nombre: '',
    sede: '',
    ano: 2021,
    chairPrincipal: '',
    coordLocal: ''
  };
  @Output() congressEmitter = new EventEmitter<ICongress>();
  @Output() cancelCongress = new EventEmitter();

  formCongress: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formCongress = this.formBuilder.group({
      nombre: [this.congress.nombre, Validators.required],
      sede: [this.congress.sede, Validators.required],
      ano: [this.congress.ano, Validators.required],
      chairPrincipal: [this.congress.chairPrincipal, Validators.required],
      coordLocal: [this.congress.coordLocal ],
    });

  }

  cancel(): void {
    this.cancelCongress.emit();
  }

  submit(): void {
    this.submitted = true;
    if (this.formCongress.invalid) {
      alert('Por favor complete todos los datos.');
      return;
    }
    this.congress = {
    id: this.congress.id,
    nombre: this.formCongress.controls.nombre.value,
    sede: this.formCongress.controls.sede.value,
    ano: this.formCongress.controls.ano.value,
    chairPrincipal: this.formCongress.controls.chairPrincipal.value,
    coordLocal: this.formCongress.controls.coordLocal.value
    };
    this.congressEmitter.emit(this.congress);

  }
}
