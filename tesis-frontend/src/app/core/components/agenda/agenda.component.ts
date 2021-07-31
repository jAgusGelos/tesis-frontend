import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISchedule } from '../../models/ISchedule';
import { CongressService } from '../../services/congress.service';
import { DefineAgendaService } from '../../services/define-agenda.service';




@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  @Output() cancelAgenda = new EventEmitter();
  @Input() schedule: ISchedule;

  congresos = [
    'Congreso 1',
    'Congreso 2',
    'Congreso 3',
  ];

  formCongress: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
              private congressService: CongressService,
              private scheduleService: DefineAgendaService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formCongress = this.formBuilder.group({
    congreso: ['', [Validators.required]],
    FechaInCongreso: [this.schedule.fechaInCongreso, [Validators.required]],
    FechaFinCongreso: [this.schedule.fechaFinCongreso, [Validators.required]],
    FechaInInscrip: [this.schedule.fechaInInscrip, [Validators.required]],
    FechaFinInscrip: [this.schedule.fechaFinInscrip, [Validators.required]],
    FechaFinInscripTardia: [this.schedule.fechaFinInscripTardia, [Validators.required]],
    FechaLimPapers: [this.schedule.fechaLimPapers, [Validators.required]],
    FechaProrrogaPapers: [this.schedule.fechaProrrogaPapers, [Validators.required]],
    FechaFinEvaluacion: [this.schedule.fechaFinEvaluacion, [Validators.required]],
    FechaFinReEv: [this.schedule.fechaFinReEv, [Validators.required]]
    });

    this.getCongresos();
  }

  getCongresos(): void {
    this.congressService.getCongress().subscribe((res: any) => {this.congresos = res.data; });
  }

  guardar(): void {
    this.scheduleService.postAgenda(this.schedule).subscribe((res: any) => {this.schedule = res.data; });

  }

  cancel(): void {
    this.cancelAgenda.emit();
  }

}
