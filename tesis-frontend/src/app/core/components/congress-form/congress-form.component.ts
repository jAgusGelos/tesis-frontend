import { Component, Input, OnInit } from '@angular/core';
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
    nombre: '',
    sede: '',
    año: 2021,
    chairPrincipal: '',
    coordLocal: ''
  };

  formCongress: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCongress = this.formBuilder.group({
      nombre: [this.congress.nombre, Validators.required],
      sede: [this.congress.sede, Validators.required],
      chairPrincipal: [this.congress.chairPrincipal, Validators.required],
      coordLocal: [this.congress.coordLocal ],
    });

  }

}
