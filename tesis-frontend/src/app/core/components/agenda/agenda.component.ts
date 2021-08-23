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
  @Input() schedule: any;

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
    FechaFinInscripTemprana: [this.schedule.fechaFinInscripTemprana, [Validators.required]],
    FechaFinInscripTardia: [this.schedule.fechaFinInscripTardia, [Validators.required]],
    FechaLimPapers: [this.schedule.fechaLimPapers, [Validators.required]],
    FechaProrrogaPapers: [this.schedule.fechaProrrogaPapers, [Validators.required]],
    FechaFinEvaluacion: [this.schedule.fechaFinEvaluacion, [Validators.required]],
    FechaFinReEv: [this.schedule.fechaFinReEv, [Validators.required]]
    });
  }

  guardar(): void {
    const agenda = {
    fechaInCongreso: this.formCongress.controls.FechaInCongreso.value + ' 00:00:00-03',
    fechaFinCongreso: this.formCongress.controls.FechaFinCongreso.value + ' 00:00:00-03',
    fechaLimPapers: this.formCongress.controls.FechaLimPapers.value + ' 00:00:00-03',
    fechaFinInsTemprana: this.formCongress.controls.FechaFinInscripTemprana.value + ' 00:00:00-03',
    fechaFinInsTardia: this.formCongress.controls.FechaFinInscripTardia.value + ' 00:00:00-03',
    fechaProrrogaPapers: this.formCongress.controls.FechaProrrogaPapers.value + ' 00:00:00-03',
    fechaFinEvaluacion: this.formCongress.controls.FechaFinEvaluacion.value + ' 00:00:00-03',
    fechaFinReEv: this.formCongress.controls.FechaFinReEv.value + ' 00:00:00-03',
    };
    if (agenda.fechaInCongreso >= agenda.fechaFinCongreso ){
      alert('La fecha de inicio no puede ser inferior a la fecha de fin');
      return;
    }
    if (agenda.fechaFinCongreso < agenda.fechaFinEvaluacion ||
      agenda.fechaFinCongreso < agenda.fechaFinInsTemprana ||
      agenda.fechaFinCongreso < agenda.fechaFinInsTardia ||
      agenda.fechaFinCongreso < agenda.fechaLimPapers ||
      agenda.fechaFinCongreso < agenda.fechaProrrogaPapers ||
      agenda.fechaFinCongreso < agenda.fechaFinEvaluacion ||
      agenda.fechaFinCongreso < agenda.fechaFinReEv
      ) {
        alert('La fecha de Fin no puede ser inferior a las otras fechas');
        return;
      }
    if (agenda.fechaFinInsTardia < agenda.fechaFinInsTemprana) {
        alert('La fecha de inscripción tardía no puede ser inferior a la fecha de inscripción temprana');
        return;
      }
    if (agenda.fechaProrrogaPapers < agenda.fechaLimPapers) {
      alert('La fecha de inscripción tardía no puede ser inferior a la fecha límite de entrega');
      return;
    }
    if (agenda.fechaFinReEv < agenda.fechaFinEvaluacion) {
      alert('La fecha de Reevaluación no puede ser inferior a la fecha de Evaluación');
      return;
    }
    if (agenda.fechaFinEvaluacion > agenda.fechaLimPapers ||
      agenda.fechaFinReEv > agenda.fechaProrrogaPapers) {
        alert('Error en las fechas de fin de evaluación y fin reevaluación' +
        'no pueden ser inferiores a las fechas de entrega de papers');
        return;
      }
    this.scheduleService.postAgenda(agenda).subscribe((res: any) => {this.schedule = res.data; });
  }

  cancel(): void {
    this.cancelAgenda.emit();
  }
}
