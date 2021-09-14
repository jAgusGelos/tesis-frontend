import { Component, Input, OnInit } from '@angular/core';
import { ICongress } from '../../models/ICongress';
import { ISchedule } from '../../models/ISchedule';
import { DefineAgendaService } from '../../services/define-agenda.service';

@Component({
  selector: 'app-congress-card',
  templateUrl: './congress-card.component.html',
  styleUrls: ['./congress-card.component.css']
})
export class CongressCardComponent implements OnInit {

  nombre: string;
  nombreSede: string;
  fechaUno: string;
  fechaDos: string;
  @Input() congress: {
    id: string,
    nombre: string,
    sede: string,
    año: string,
    fechaFinInsTemprana: string,
    fechaFinInsTardia: string,
    nombreSede: string};

  constructor() { }

  ngOnInit(): void {
    this.nombre = this.congress.nombre;
    this.nombreSede = this.congress.nombreSede;
    this.fechaUno = this.congress.fechaFinInsTemprana;
    this.fechaDos = this.congress.fechaFinInsTardia;

  }

}
