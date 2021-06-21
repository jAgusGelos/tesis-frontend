import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  @Input() titulo = 'Formulario de Registro';
  formUsuario: FormGroup;
  submitted: false;
  tipoDni = ['DNI', 'CU', 'CI'];
  nacionalidades = ['ARGENTINA', 'PERU', 'COLOMBIA'];
  provincias = ['Cordoba', 'Buenos Aires'];
  localidades = ['Capital', 'Rio IV'];
  @Input() usuario: Usuario = {
    dni: 0,
    tipoDni: '',
    apellido: '',
    nombre: '',
    fechaNacimiento: new Date(),
    nacionalidad: '',
    provincia: '',
    localidad: '',
    calle: '',
    nroCalle: 0,
    piso: '',
    dpto: '',
    telefono: 0,
    celular: 0,
    email: '' };

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formUsuario = this.formBuilder.group({
      dni: [this.usuario.dni, [Validators.required]],
      tipoDni: [this.usuario.tipoDni, [Validators.required]],
      apellido: [this.usuario.apellido, [Validators.required]],
      nombre: [this.usuario.nombre, [Validators.required]],
      fechaNacimiento: [this.usuario.fechaNacimiento, [Validators.required]],
      nacionalidad: [this.usuario.nacionalidad, [Validators.required]],
      provincia: [this.usuario.provincia, [Validators.required]],
      localidad: [this.usuario.localidad, [Validators.required]],
      calle: [this.usuario.calle, [Validators.required]],
      nroCalle: [this.usuario.nroCalle, [Validators.required]],
      piso: [this.usuario.piso, []],
      dpto: [this.usuario.dpto, []],
      telefono: [this.usuario.telefono, [Validators.required]],
      celular: [this.usuario.celular, []],
      email: [this.usuario.email, [Validators.required]]
    });
  }
}
