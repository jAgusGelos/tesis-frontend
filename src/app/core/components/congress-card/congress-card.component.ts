import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICongress } from '../../models/ICongress';
import { ISchedule } from '../../models/ISchedule';
import { AuthService } from '../../services/auth.service';
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
  fechaInicio: string;
  fechaFin: string;
  @Input() congress: {
    id: string,
    nombre: string,
    sede: string,
    año: string,
    fechaFinInsTemprana: string,
    fechaFinInsTardia: string,
    nombre_sede: string,
    fechaInicioExposiciones: string;
    fechaFinExposiciones: string;
  };
  user: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.nombre = this.congress.nombre;
    this.nombreSede = this.congress.nombre_sede;
    this.fechaUno = this.congress.fechaFinInsTemprana;
    this.fechaDos = this.congress.fechaFinInsTardia;
    this.fechaInicio = this.congress.fechaInicioExposiciones;
    this.fechaFin = this.congress.fechaFinExposiciones;
    this.user = this.authService.getUserId();
  }

  verInfoPublica(): void{
    this.verInfoPublicaEvent.emit(this.congress);
  }
}
