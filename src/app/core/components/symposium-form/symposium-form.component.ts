import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISymposium } from '../../models/ISymposium';

@Component({
  selector: 'app-symposium-form',
  templateUrl: './symposium-form.component.html',
  styleUrls: ['./symposium-form.component.css']
})
export class SymposiumFormComponent implements OnInit {

  @Input() symposium: ISymposium = {
    id: '',
    nombre: '',
    descripcion: ''
  };
  @Output() symposiumEmitter = new EventEmitter<ISymposium>();
  @Output() cancelSymposium = new EventEmitter();

  formSymposium: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formSymposium = this.formBuilder.group({
      nombre: [this.symposium.nombre, Validators.required],
      desc: [this.symposium.descripcion, Validators.required]
    });

  }

  cancel(): void {
    this.cancelSymposium.emit();
  }

  submit(): void {
    this.submitted = true;
    if (this.formSymposium.invalid) {
      alert('Por favor complete todos los datos.');
      return;
    }
    this.symposium = {
    id: this.symposium.id,
    nombre: this.formSymposium.controls.nombre.value,
    descripcion: this.formSymposium.controls.desc.value,
    };
    this.symposiumEmitter.emit(this.symposium);

  }

}
