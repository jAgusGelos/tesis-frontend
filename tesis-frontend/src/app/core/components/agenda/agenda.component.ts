import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAgenda } from '../../models/Iagenda';
import { CongressService } from '../../services/congress.service';
import { DefineAgendaService } from '../../services/define-agenda.service';




@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  @Input() agenda: IAgenda = {

    Id: 0,
    fechaInCongreso: new Date(),
    fechaFinCongreso: new Date(),
    fechaInInscrip: new Date(),
    fechaFinInscrip: new Date(),
    fechaFinInscripTardia: new Date(),
    fechaLimPapers: new Date(),
    fechaProrrogaPapers: new Date(),
    fechaFinEvaluacion: new Date(),
    fechaFinReEv: new Date(),
    simposios: [],
    aulas: [],
    modalidad: ''


  };

  congresos = [
    'Congreso 1',
    'Congreso 2',
    'Congreso 3',
  ];

  formCongress: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private congressService: CongressService,
    private agendaService: DefineAgendaService) { }

  ngOnInit(): void {
    this.formCongress = this.formBuilder.group({
    congreso: ['', [Validators.required]],
    FechaInCongreso: [this.agenda.fechaInCongreso, [Validators.required]],
    FechaFinCongreso: [this.agenda.fechaFinCongreso, [Validators.required]],
    FechaInInscrip: [this.agenda.fechaInInscrip, [Validators.required]],
    FechaFinInscrip: [this.agenda.fechaFinInscrip, [Validators.required]],
    FechaFinInscripTardia: [this.agenda.fechaFinInscripTardia, [Validators.required]],
    FechaLimPapers: [this.agenda.fechaLimPapers, [Validators.required]],
    FechaProrrogaPapers: [this.agenda.fechaProrrogaPapers, [Validators.required]],
    FechaFinEvaluacion: [this.agenda.fechaFinEvaluacion, [Validators.required]],
    FechaFinReEv: [this.agenda.fechaFinReEv, [Validators.required]]
    });

    this.getCongresos();
  }

  getCongresos() {
    this.congressService.getCongress().subscribe((res: any) => {this.congresos = res.data});
  };

  guardar() {
    this.agendaService.postAgenda(this.agenda).subscribe((res: any) => {this.agenda = res.data});

  };

}
