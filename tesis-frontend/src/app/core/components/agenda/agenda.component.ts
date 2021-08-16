import { Message } from '@angular/compiler/src/i18n/i18n_ast';
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
    FechaFinInscripTemprana: [this.schedule.fechaFinInscripTemprana, [Validators.required]],
    FechaFinInscripTardia: [this.schedule.fechaFinInscripTardia, [Validators.required]],
    FechaLimPapers: [this.schedule.fechaLimPapers, [Validators.required]],
    FechaProrrogaPapers: [this.schedule.fechaProrrogaPapers, [Validators.required]],
    FechaFinEvaluacion: [this.schedule.fechaFinEvaluacion, [Validators.required]],
    FechaFinReEv: [this.schedule.fechaFinReEv, [Validators.required]]
    });
  }

  guardar(): void {
      this.scheduleService.postAgenda(this.schedule).subscribe((res: any) => {this.schedule = res.data; });
  }

  cancel(): void {
    this.cancelAgenda.emit();
  }
}
