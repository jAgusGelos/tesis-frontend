import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
              private scheduleService: DefineAgendaService,
              private router: Router,
              private toastr: ToastrService) {
                this.router.routeReuseStrategy.shouldReuseRoute = () => {
                  return false;
                };
              }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formCongress = this.formBuilder.group({
      congreso: ['', [Validators.required]],
      FechaInCongreso: [this.schedule.fechaInCongreso ? this.invertConvertDateFormat(this.schedule.fechaInCongreso) : null,
         [Validators.required]],
      FechaFinCongreso: [this.schedule.fechaFinCongreso ? this.invertConvertDateFormat(this.schedule.fechaFinCongreso) : null,
         [Validators.required]],
      FechaCierreCongreso: [this.schedule.fechaCierreCongreso ? this.invertConvertDateFormat(this.schedule.fechaCierreCongreso) : null,
          [Validators.required]],
      FechaFinInscripTemprana: [this.schedule.fechaFinInscripTemprana ?
            this.invertConvertDateFormat(this.schedule.fechaFinInscripTemprana) :
            null,
         [Validators.required]],
      FechaFinInscripTardia: [this.schedule.fechaFinInscripTardia ?
            this.invertConvertDateFormat(this.schedule.fechaFinInscripTardia) :
            null,
         [Validators.required]],
      FechaLimPapers: [this.schedule.fechaLimPapers ? this.invertConvertDateFormat(this.schedule.fechaLimPapers) : null,
         [Validators.required]],
      FechaProrrogaPapers: [this.schedule.fechaProrrogaPapers ? this.invertConvertDateFormat(this.schedule.fechaProrrogaPapers) : null,
         [Validators.required]],
      FechaFinEvaluacion: [this.schedule.fechaFinEvaluacion ? this.invertConvertDateFormat(this.schedule.fechaFinEvaluacion) : null,
         [Validators.required]],
      FechaFinReEv: [this.schedule.fechaFinReEv ? this.invertConvertDateFormat(this.schedule.fechaFinReEv) : null,
         [Validators.required]],
      FechaInicioExposiciones: [this.schedule.FechaInicioExposiciones ? this.invertConvertDateFormat(this.schedule.FechaInicioExposiciones) : null,
          [Validators.required]],
      FechaFinExposiciones: [this.schedule.FechaFinExposiciones ? this.invertConvertDateFormat(this.schedule.FechaFinExposiciones) : null,
          [Validators.required]]
    });
  }

  convertDateFormat(date: string): any {
    const info = date.split('-').reverse().join('/');
    return info;
  }

  invertConvertDateFormat(date: string): any {
    date = date.split(' ')[0];
    const info = date.split('/').reverse().join('-');
    return info;
  }
  toast(text: string): void {
    // Metodo 1
    this.toastr.warning(text);
  }

  guardar(): void {
    this.submitted = true;
    const agenda = {
      fechaInCongreso: this.convertDateFormat(this.formCongress.controls.FechaInCongreso.value) + ' 00:00:00',
      fechaFinCongreso: this.convertDateFormat(this.formCongress.controls.FechaFinCongreso.value) + ' 00:00:00',
      fechaCierreCongreso: this.convertDateFormat(this.formCongress.controls.FechaCierreCongreso.value) + ' 00:00:00',
      fechaLimPapers: this.convertDateFormat(this.formCongress.controls.FechaLimPapers.value) + ' 00:00:00',
      fechaFinInsTemprana: this.convertDateFormat(this.formCongress.controls.FechaFinInscripTemprana.value) + ' 00:00:00',
      fechaFinInsTardia: this.convertDateFormat(this.formCongress.controls.FechaFinInscripTardia.value) + ' 00:00:00',
      fechaProrrogaPapers: this.convertDateFormat(this.formCongress.controls.FechaProrrogaPapers.value) + ' 00:00:00',
      fechaFinEvaluacion: this.convertDateFormat(this.formCongress.controls.FechaFinEvaluacion.value) + ' 00:00:00',
      fechaFinReEv: this.convertDateFormat(this.formCongress.controls.FechaFinReEv.value) + ' 00:00:00',
      fechaInicioExposiciones: this.convertDateFormat(this.formCongress.controls.FechaInicioExposiciones.value) + ' 00:00:00',
      fechaFinExposiciones: this.convertDateFormat(this.formCongress.controls.FechaFinExposiciones.value) + ' 00:00:00',
    };
    if (new Date(agenda.fechaCierreCongreso) < new Date(agenda.fechaFinCongreso)) {
      this.toast('La fecha de Cierre debe ser mayor a la fecha de fin');
      return;
    }
    if (new Date(agenda.fechaInCongreso) >= new Date(agenda.fechaFinCongreso)) {
      this.toast('La fecha de inicio no puede ser mayor a la fecha de fin');
      return;
    }
    if (new Date(agenda.fechaFinCongreso) < new Date(agenda.fechaFinEvaluacion) ||
      new Date(agenda.fechaFinCongreso) < new Date(agenda.fechaFinInsTemprana) ||
      new Date(agenda.fechaFinCongreso) < new Date(agenda.fechaFinInsTardia) ||
      new Date(agenda.fechaFinCongreso) < new Date(agenda.fechaLimPapers) ||
      new Date(agenda.fechaFinCongreso) < new Date(agenda.fechaProrrogaPapers) ||
      new Date(agenda.fechaFinCongreso) < new Date(agenda.fechaFinEvaluacion) ||
      new Date(agenda.fechaFinCongreso) < new Date(agenda.fechaFinReEv)
    ) {
      this.toast('La fecha de Fin no puede ser inferior a las otras fechas');
      return;
    }
    if (new Date(agenda.fechaFinInsTardia) < new Date(agenda.fechaFinInsTemprana)) {
      this.toast('La fecha de inscripción tardía no puede ser inferior a la fecha de inscripción temprana');
      return;
    }
    if (new Date(agenda.fechaProrrogaPapers) < new Date(agenda.fechaLimPapers)) {
      this.toast('La fecha de inscripción tardía no puede ser inferior a la fecha límite de entrega');
      return;
    }
    if (new Date(agenda.fechaFinReEv) < new Date(agenda.fechaFinEvaluacion)) {
      this.toast('La fecha de Reevaluación no puede ser inferior a la fecha de Evaluación');
      return;
    }
    if (new Date(agenda.fechaFinEvaluacion) < new Date(agenda.fechaProrrogaPapers) ||
      new Date(agenda.fechaFinReEv) < new Date(agenda.fechaProrrogaPapers)) {
      this.toast('Error en las fechas de fin de evaluación y fin reevaluación ' +
      'no pueden ser inferiores a las fechas de entrega de papers');
      return;
    }
    this.scheduleService.postAgenda(agenda).subscribe((res: any) => {
      this.toastr.success('Fechas Modificadas correctamente');
      this.router.navigateByUrl('/misCongresos');
     });
  }

  cancel(): void {
    this.cancelAgenda.emit();
  }
}
