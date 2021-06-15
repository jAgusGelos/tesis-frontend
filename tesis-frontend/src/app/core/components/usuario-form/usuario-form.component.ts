import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  nacionalidades = ['ARGENTINA','PERU', 'COLOMBIA'];
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
    numeroCalle: 0,
    piso: '',
    dpto: '',
    telefono: 0,
    celular: 0,
    email: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
