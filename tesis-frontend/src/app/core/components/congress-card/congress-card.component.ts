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
  nombre_sede: string;
  fechaUno: string;
  fechaDos: string;
  @Input() congress: {id: string, nombre:string, sede: string, año: string, fechaFinInsTemprana: string, fechaFinInsTardia: string, nombre_sede: string};

  constructor() { }

  ngOnInit(): void {
    this.nombre=this.congress.nombre;
    this.nombre_sede = this.congress.nombre_sede;
    this.fechaUno = this.congress.fechaFinInsTemprana.split(" ")[0];
    this.fechaDos = this.congress.fechaFinInsTardia.split(" ")[0];
    
  }
  
}
