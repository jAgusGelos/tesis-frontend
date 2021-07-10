import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICongress } from '../../models/ICongress';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  @Input() congress: ICongress = {
    nombre: '',
    sede: '',
    año: 2020,
    chairPrincipal: '',
    coordLocal: ''
  };
  formCongress: FormGroup;
  submitted = false;
  // Esto hay que pedirselo al back.
  simposios = [{id: 0, nombre: 'Tematica 1'}, {id: 1, nombre: 'Tematica 2'}, {id: 3, nombre: 'Tematica 3'}];
  aulas = [{id: 0, nombre: 'Aula 1', capacidad: 250}, {id: 0, nombre: 'Aula 2', capacidad: 200}];


  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
  }

}
