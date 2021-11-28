import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-congress-form',
  templateUrl: './congress-form.component.html',
  styleUrls: ['./congress-form.component.css']
})
export class CongressFormComponent implements OnInit {


  // Tiene que dar Nombre - Sede - Año - Email CP CL -
  @Input() congress = {
    id: '',
    nombre: '',
    sede: '',
    ano: 2021,
    chairPrincipal: '',
    coordLocal: ''
  };
  @Output() congressEmitter = new EventEmitter();
  @Output() cancelCongress = new EventEmitter();
  @Output() editCongress = new EventEmitter();

  formCongress: FormGroup;
  submitted = false;
  @Input() sedes = [];

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formCongress = this.formBuilder.group({
      nombre: [this.congress.nombre, Validators.required],
      sede: [this.congress.sede, Validators.required],
      ano: [this.congress.ano, [Validators.required, Validators.pattern('20[0-9][0-9]')]],
      chairPrincipal: [this.congress.chairPrincipal, [Validators.required, Validators.email]],
      coordLocal: [this.congress.coordLocal, Validators.email ],
    });
  }


  cancel(): void {
    this.cancelCongress.emit();
  }

  edit(): void {
    this.submitted = true;
    if (this.formCongress.invalid) {
      this.toastr.warning('Por favor complete todos los datos.');
      return;
    }
    this.congress = {
    id: this.congress.id,
    nombre: this.formCongress.controls.nombre.value,
    sede: this.formCongress.controls.sede.value,
    ano: this.formCongress.controls.ano.value,
    chairPrincipal: this.formCongress.controls.chairPrincipal.value,
    coordLocal: this.formCongress.controls.coordLocal.value || null
    };
    this.editCongress.emit(this.congress);

  }

  submit(): void {
    this.submitted = true;
    if (this.formCongress.invalid) {
      this.toastr.warning('Por favor complete todos los datos.');
      return;
    }
    this.congress = {
    id: this.congress.id,
    nombre: this.formCongress.controls.nombre.value,
    sede: this.formCongress.controls.sede.value,
    ano: this.formCongress.controls.ano.value,
    chairPrincipal: this.formCongress.controls.chairPrincipal.value,
    coordLocal: this.formCongress.controls.coordLocal.value || null
    };
    this.congressEmitter.emit(this.congress);

  }
}
