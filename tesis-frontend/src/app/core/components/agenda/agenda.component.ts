import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAgenda } from '../../models/IAgenda';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  @Input() agenda: IAgenda = {
  simposios: [],
  fechaInCongreso: new Date(),
  fechaFinCongreso: new Date(),
  fechaLimPapers: new Date(),
  fechaProrrogaPapers: new Date(),
  fechaFinEvaluacion: new Date(),
  fechaFinReEv: new Date(),
  aulas: [],
  modalidad: '',
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
