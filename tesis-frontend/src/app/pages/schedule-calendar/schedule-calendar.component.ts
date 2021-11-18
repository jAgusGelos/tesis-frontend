import { Component, HostListener, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, SelectMultipleControlValueAccessor, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CalendarView,
  CalendarDateFormatter,
  DateAdapter
} from 'angular-calendar';
import {
  addPeriod,
  CalendarSchedulerEvent,
  CalendarSchedulerEventAction,
  CalendarSchedulerEventStatus,
  DAYS_IN_WEEK,
  endOfPeriod,
  SchedulerDateFormatter,
  SchedulerEventTimesChangedEvent,
  SchedulerViewDay,
  SchedulerViewHour,
  SchedulerViewHourSegment,
  startOfPeriod,
  subPeriod
} from 'angular-calendar-scheduler';
import { addMonths, endOfDay, parseISO } from 'date-fns';
import * as moment from 'moment';
import { Toast, ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { CustomToastComponent } from 'src/app/core/components/custom-toast/custom-toast.component';
import { ArticulosService } from 'src/app/core/services/articulos.service';
import { CongressService } from 'src/app/core/services/congress.service';
import { PaperService } from 'src/app/core/services/paper.service';
import { RoomService } from 'src/app/core/services/room.service';
import { ScheduleCalendarService } from 'src/app/core/services/schedule-calendar.service';

@Component({
  selector: 'app-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: SchedulerDateFormatter,
    },
  ],
})
export class ScheduleCalendarComponent implements OnInit {

  CalendarView = CalendarView;

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date(); // Igual a minDate!!
  viewDays: number = DAYS_IN_WEEK;
  refresh: Subject<any> = new Subject();
  locale = 'en';
  hourSegments = 3;
  weekStartsOn = 1;
  startsWithToday = true;
  activeDayIsOpen = true;
  excludeDays: number[] = []; // [0];
  dayStartHour = 8;
  dayEndHour = 20;
  submitted = false;

  // Cambiar estos dos por la fecha de inicio y fin del congreso.
  minDate: Date = new Date();
  maxDate: Date = endOfDay(addMonths(new Date(), 1));
  dayModifier: Function;
  hourModifier: Function;
  segmentModifier: Function;
  eventModifier: Function;
  prevBtnDisabled = false;
  nextBtnDisabled = false;
  formEvento: FormGroup;
  plenaria = false;
  submittedPlen = false;

  evento = {
    idEvento: null,
    date: '',
    startHour: '',
    startMinute: '',
    endHour: '',
    endMinute: '',
    title: '',
    content: '',
    idSimposio: null,
    idArticulo: null
  };

  paperList = [];
  showList = [];
  hours = Array.from({ length: 15 }, (_, i) => i + 8);
  minutes = Array.from({ length: 12 }, (_, i) => i * 5);
  simposios = [];
  roomList = [];
  loading = false;
  idAula = '';
  min = '';
  max = '';
  eventosCompletos = [];
  formPlenaria: FormGroup;

  actions: CalendarSchedulerEventAction[] = [
    {
      when: 'enabled',
      label: '<span class="valign-center"><i class="fas fa-trash"></i></span>',
      title: 'Borrar',
      onClick: (event: CalendarSchedulerEvent): void => {

        this.toastr
          .show('¿Está seguro que desea eliminar el evento?' + '\nToda los cambios se perderán.', '¿Borrar evento?', {
            toastComponent: CustomToastComponent,
            disableTimeOut: true,
            tapToDismiss: false,
            enableHtml: true
          })
          .onAction.subscribe(() => {
            // Aca se hace el camino feliz
            this.calendarService.deleteEvento(+event.id).subscribe((res: any) => {
              this.toastr.success('Evento "' + event.title + '" eliminado con éxito');
              this.getEventos();
            });
          });
      }
    },
  ];

  events: CalendarSchedulerEvent[];

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.adjustViewDays();
  }

  constructor(@Inject(LOCALE_ID) locale: string,
              private dateAdapter: DateAdapter,
              private calendarService: ScheduleCalendarService,
              private formBuild: FormBuilder,
              private paperService: PaperService,
              private congresService: CongressService,
              private articulosService: ArticulosService,
              private router: Router,
              private roomService: RoomService,
              private toastr: ToastrService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.locale = locale;

    this.segmentModifier = ((segment: SchedulerViewHourSegment): void => {
      segment.isDisabled = !this.isDateValid(segment.date);
    }).bind(this);

    this.eventModifier = ((event: CalendarSchedulerEvent): void => {
      event.isDisabled = !this.isDateValid(event.start);
    }).bind(this);

    this.adjustViewDays();
    this.dateOrViewChanged();
  }

  ngOnInit(): void {
    this.getSimposios();
    this.getArticles();
    this.getRooms();
    this.getCongres();
    this.formEvento = this.formBuild.group(this.values());
    this.formPlenaria = this.formBuild.group(this.plenariaValues());
  }


  getCongres(): void {
    this.congresService.getCongressById().subscribe((res: any) => {
      const fechaI = res.data[0].fechaInicioExposiciones.split(' ')[0].split('/');
      const fechaF = res.data[0].fechaFinExposiciones.split(' ')[0].split('/');

      const fechaIn = new Date(fechaI[2], fechaI[1] - 1, fechaI[0]);
      const fechaFin = new Date(fechaF[2], fechaF[1] - 1, fechaF[0]);
      this.viewDate = fechaIn;
      this.minDate = fechaIn;
      this.maxDate.setDate(fechaFin.getDate());
      this.min = `${fechaI[2]}-${fechaI[1]}-${fechaI[0]}`;
      this.max = `${fechaF[2]}-${fechaF[1]}-${fechaF[0]}`;
    });
  }

  aulaSelected(idAula: any): void {
    // llamar a los eventos del aula
    this.idAula = idAula;

    this.loading = true;
    this.getEventos();
  }

  getEventos(): void {
    // con el idAula Llama a los eventos
    this.calendarService.getRoomEvents(+this.idAula).subscribe((res: any) => {
      this.eventosCompletos = res.data;
      this.events = res.data.map((elem: any) => {
        let aux = elem.start.split(' ');
        const startDays = aux[0].split('/');
        const startHour = aux[1].split(':');

        aux = elem.end.split(' ');
        const endDays = aux[0].split('/');
        const endHour = aux[1].split(':');

        return {
          id: elem.idEvento,
          title: elem.title,
          content: elem.content,
          idSimposio: elem.idSimposio,
          idArticulo: elem.idARticulo,
          start: new Date(startDays[2], startDays[1] - 1, startDays[0], startHour[0], startHour[1], 0),
          end: new Date(endDays[2], endDays[1] - 1, endDays[0], endHour[0], endHour[1], 0),
          color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
          actions: this.actions,
          status: 'ok' as CalendarSchedulerEventStatus,
          isClickable: true,
          isDisabled: false
        } as CalendarSchedulerEvent;
      });
      console.log(this.events);
      this.loading = false;
    });
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe((res: any) => {
      this.roomList = res.data[0];
    });
  }

  getArticles(): void {
    this.articulosService.getCameraReady().subscribe((res: any) => {
      this.paperList = res.data;
    });
  }

  getSimposios(): void {
    this.paperService.getSimposiosActivos().subscribe((res: any) => {
      this.simposios = res.data;
    });
  }

  plenariaValues(): any {
    return {
      idEvento: [this.evento.idEvento || null],
      date: [this.evento.date || ''],
      startHour: [+this.evento.startHour || 0],
      endHour: [+this.evento.endHour || 0],
      startMinute: [+this.evento.startMinute || 0],
      endMinute: [+this.evento.endMinute || 0],
      title: [this.evento.title || '', [Validators.required]],
      desc: [this.evento.content || '', [Validators.required]],
    };
  }

  values(): any {
    return {
      idEvento: [this.evento.idEvento || null],
      date: [this.evento.date || ''],
      startHour: [+this.evento.startHour || 0],
      endHour: [+this.evento.endHour || 0],
      startMinute: [+this.evento.startMinute || 0],
      endMinute: [+this.evento.endMinute || 0],
      title: [this.evento.title, [Validators.required]],
      desc: [this.evento.content || '', [Validators.required]],
      idSimposio: [this.evento.idSimposio || '', [Validators.required]],
      idPaper: [this.evento.idArticulo || '', [Validators.required]]
    };
  }

  adjustViewDays(): void {
    const currentWidth: number = window.innerWidth;
    if (currentWidth <= 450) {
      this.viewDays = 1;
    } else if (currentWidth <= 768) {
      this.viewDays = 3;
    } else {
      this.viewDays = DAYS_IN_WEEK;
    }
  }

  changeDate(date: Date): void {
    console.log('changeDate', date);
    this.viewDate = date;
    this.dateOrViewChanged();
  }

  changeView(view: CalendarView): void {
    console.log('changeView', view);
    this.view = view;
    this.dateOrViewChanged();
  }

  dateOrViewChanged(): void {
    if (this.startsWithToday) {
      this.prevBtnDisabled = !this.isDateValid(
        subPeriod(
          this.dateAdapter,
          CalendarView.Day /*this.view*/,
          this.viewDate,
          1
        )
      );
      this.nextBtnDisabled = !this.isDateValid(
        addPeriod(
          this.dateAdapter,
          CalendarView.Day /*this.view*/,
          this.viewDate,
          1
        )
      );
    } else {
      this.prevBtnDisabled = !this.isDateValid(
        endOfPeriod(
          this.dateAdapter,
          CalendarView.Day /*this.view*/,
          subPeriod(
            this.dateAdapter,
            CalendarView.Day /*this.view*/,
            this.viewDate,
            1
          )
        )
      );
      this.nextBtnDisabled = !this.isDateValid(
        startOfPeriod(
          this.dateAdapter,
          CalendarView.Day /*this.view*/,
          addPeriod(
            this.dateAdapter,
            CalendarView.Day /*this.view*/,
            this.viewDate,
            1
          )
        )
      );
    }

    if (this.viewDate < this.minDate) {
      this.changeDate(this.minDate);
    } else if (this.viewDate > this.maxDate) {
      this.changeDate(this.maxDate);
    }
  }

  private isDateValid(date: Date): boolean {
    return /*isToday(date) ||*/ date >= this.minDate && date <= this.maxDate;
  }

  hourClicked(hour: SchedulerViewHour): void {
    console.log('hourClicked Hour', hour);
  }


  segmentClicked(action: string, segment: SchedulerViewHourSegment): void {
    this.submitted = false;
    this.submittedPlen = false;
    this.formEvento.reset();
    this.formEvento.setErrors({});
    this.formEvento.clearValidators();
    this.evento = {
      idEvento: null,
      title: '',
      content: '',
      idSimposio: null,
      idArticulo: null,
      date: segment.date.toLocaleDateString(),
      startHour: segment.date.toLocaleTimeString().split(':')[0],
      startMinute: segment.date.toLocaleTimeString().split(':')[1],
      endHour: moment(segment.date).add(20, 'm').toDate().toLocaleTimeString().split(':')[0],
      endMinute: moment(segment.date).add(20, 'm').toDate().toLocaleTimeString().split(':')[1],
    };
    this.formEvento = this.formBuild.group(this.values());

    const btnDetalle = document.getElementById('activar-modal');
    btnDetalle.click();
  }

  eventClicked(action: string, event: CalendarSchedulerEvent): void {
    const eventoCompleto = this.eventosCompletos.find((x: any) => {
      return x.idEvento === event.id;
    });
    this.evento = {
      ...this.evento,
      idEvento: event.id || '',
      date: event.start.toLocaleDateString(),
      startHour: event.start.toLocaleTimeString().split(':')[0],
      startMinute: event.start.toLocaleTimeString().split(':')[1],
      endHour: event.end.toLocaleTimeString().split(':')[0],
      endMinute: event.end.toLocaleTimeString().split(':')[1],
      title: event.title,
      content: eventoCompleto.content,
      idArticulo: eventoCompleto.idArticulo,
      idSimposio: eventoCompleto.idSimposio
    };
    if (this.evento.idSimposio !== null) {
      this.simposioSeleccionado(this.evento.idSimposio);
      this.formEvento = this.formBuild.group(this.values());
      const btnDetalle = document.getElementById('activar-modal');
      btnDetalle.click();
    } else {
      const strDate = this.evento.date;
      const auxDate = strDate.split('/');
      this.evento.date = auxDate[2] + '-' + auxDate[1] + '-' + auxDate[0];
      this.formPlenaria = this.formBuild.group(this.plenariaValues());
      const btnDetalle = document.getElementById('btnPLenaria');
      btnDetalle.click();
    }

  }

  simposioSeleccionado(item: any): void {
    // Aca tengo que cargar los papers que correspondan a ese simposio;
    const paper = this.paperList.filter((elem: any) => elem.idArticulo === this.evento.idArticulo);
    this.showList = this.paperList.filter((elem: any) => {
      if (+elem.idSimposio === +item) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.eventosCompletos.length; i++) {
          const element = this.eventosCompletos[i];
          if (element.idArticulo === elem.idArticulo && this.evento.idArticulo !== elem.idArticulo) {
            return false;
          }
        }
        return true;
      }
    });
    this.showList.push(paper);
  }

  submit(): void {
    this.submitted = true;

    if (this.formEvento.invalid) {
      this.toastr.warning('Por favor, complete todos los datos');
      return;
    }
    const form = this.formEvento.controls;

    const finDate = form.date.value.split('-');
    const auxDate = `${finDate[1]}/${finDate[2]}/${finDate[0]}`;
    const auxStart = new Date(auxDate + ' ' + form.startHour.value + ':' + form.startMinute.value);
    const auxEnd = new Date(auxDate + ' ' + form.endHour.value + ':' + form.endMinute.value);

    const fDate = form.date.value.split('/');
    const date = `${fDate[0]}/${fDate[1]}/${fDate[2]}`;
    // const startHourFinal = (form.startHour.value.length > 1 ? form.startHour.value : '0' + form.startHour.value)
    const start = date + ' ' + form.startHour.value + ':' + form.startMinute.value + ':00';
    const end = date + ' ' + form.endHour.value + ':' + form.endMinute.value + ':00';

    if (auxStart >= auxEnd) {
      this.toastr.warning('Hora inválida');
      return;
    }
    // Chequeo de dos horarios superpuestos
    // const overStepped = this.events.find((item: any) => {
    //   if (start === item.startDate){
    //     return true;
    //   }
    //   if (start < item.startDate && end <= item.startDate) {
    //     return false;
    //   }
    //   if (start < item.startDate && end >= item.startDate) {
    //     return true;
    //   }
    //   if (start > item.startDate && start < item.endDate) {
    //     return true;
    //   }
    //   return false;
    // });

    // if (overStepped) {
    //   alert('Horarios Superpuestos. Imposible ')
    //   return;
    // }

    const evento = {
      idEvento: form.idEvento.value,
      title: form.title.value,
      desc: form.desc.value,
      start,
      end,
      idSimposio: form.idSimposio.value,
      idAula: this.idAula,
      idArticulo: form.idPaper.value
    };
    console.log(evento.idEvento);

    if (evento.idEvento !== null) {
      this.calendarService.putEvento(evento).subscribe((res: any) => {
        const btnDismiss = document.getElementById('dismiss');
        btnDismiss.click();
        this.loading = true;
        this.getEventos();
      });

    } else {
      this.calendarService.postEvento(evento).subscribe((res: any) => {
        const btnDismiss = document.getElementById('dismiss');
        btnDismiss.click();
        this.loading = true;
        this.getEventos();
      });
    }
  }

  submitPlenaria(): void {
    this.submittedPlen = true;
    if (this.formPlenaria.invalid) {
      this.toastr.warning('Por favor, complete todos los datos');
      return;
    }

    const form = this.formPlenaria.controls;
    if (form.date.value === '') {
      form.date.setValue(this.min);
    }

    const finDate = form.date.value.split('-');
    const auxDate = `${finDate[1]}/${finDate[2]}/${finDate[0]}`;
    const auxStart = new Date(auxDate + ' ' + form.startHour.value + ':' + form.startMinute.value);
    const auxEnd = new Date(auxDate + ' ' + form.endHour.value + ':' + form.endMinute.value);

    const fDate = form.date.value.split('-');
    const date = `${fDate[2]}/${fDate[1]}/${fDate[0]}`;
    // const startHourFinal = (form.startHour.value.length > 1 ? form.startHour.value : '0' + form.startHour.value)
    const start = date + ' ' + form.startHour.value + ':' + form.startMinute.value + ':00';
    const end = date + ' ' + form.endHour.value + ':' + form.endMinute.value + ':00';

    if (auxStart >= auxEnd) {
      this.toastr.warning('Hora inválida');
      return;
    }
    // Chequeo de dos horarios superpuestos
    // const overStepped = this.events.find((item: any) => {
    //   if (start === item.startDate){
    //     return true;
    //   }
    //   if (start < item.startDate && end <= item.startDate) {
    //     return false;
    //   }
    //   if (start < item.startDate && end >= item.startDate) {
    //     return true;
    //   }
    //   if (start > item.startDate && start < item.endDate) {
    //     return true;
    //   }
    //   return false;
    // });

    // if (overStepped) {
    //   alert('Horarios Superpuestos. Imposible ')
    //   return;
    // }

    const evento = {
      idEvento: form.idEvento.value,
      title: form.title.value,
      desc: form.desc.value,
      start,
      end
    };

    if (evento.idEvento !== null) {
      this.calendarService.putPlenaria(evento).subscribe((res: any) => {
        const btnDismiss = document.getElementById('dismissPlenaria');
        btnDismiss.click();
        this.loading = true;
        if (this.idAula) {
          this.getEventos();
        }

      });

    } else {
      this.calendarService.postPlenaria(evento).subscribe((res: any) => {
        const btnDismiss = document.getElementById('dismissPlenaria');
        btnDismiss.click();
        this.loading = true;
        if (this.idAula) {
          this.getEventos();
        }
      });
    }
  }
}
