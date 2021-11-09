import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICongress } from '../../models/ICongress';
import { ISchedule } from '../../models/ISchedule';
import { DefineAgendaService } from '../../services/define-agenda.service';

@Component({
  selector: 'app-congress-card',
  templateUrl: './congress-card.component.html',
  styleUrls: ['./congress-card.component.css']
})
export class CongressCardComponent implements OnInit {

  @Output() verInfoPublicaEvent = new EventEmitter(); 
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
    nombre_sede: string};

  constructor() { }

  ngOnInit(): void {
    this.nombre = this.congress.nombre;
    this.nombreSede = this.congress.nombre_sede;
    this.fechaUno = this.congress.fechaFinInsTemprana;
    this.fechaDos = this.congress.fechaFinInsTardia;
    console.log('card')
    console.log(this.congress);
  }

  verInfoPublica():void{
    
    this.verInfoPublicaEvent.emit(this.congress);
  }
}
