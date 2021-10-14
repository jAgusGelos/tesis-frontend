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
import { addMonths, endOfDay } from 'date-fns';
import * as moment from 'moment';
import { Toast, ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
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
    id: null,
    date: '',
    startHour: '',
    startMinute: '',
    endHour: '',
    endMinute: '',
    title: '',
    desc: '',
    idSimposio: null,
    idPaper: null
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
        console.log('Pressed action \'Delete\' on event ' + event.id);
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
    this.getEvaluators();
    this.getRooms();
    this.getCongres();
    this.formEvento = this.formBuild.group(this.values());
    this.formPlenaria = this.formBuild.group(this.plenariaValues());
  }


  getCongres(): void {
    this.congresService.getCongressById().subscribe((res: any) => {
      const fechaI = res.data[0].fechaInCongreso.split(' ')[0].split('/');
      const fechaF = res.data[0].fechaFinCongreso.split(' ')[0].split('/');

      const fechaIn = new Date(fechaI[2], fechaI[1] - 1, fechaI[0]);
      const fechaFin = new Date(fechaF[2], fechaF[1] - 1, fechaF[0]);
      this.viewDate = fechaIn;
      this.minDate = fechaIn;
      this.maxDate = fechaFin;
      this.min = `${fechaI[2]}-${fechaI[1]}-${fechaI[0]}`;
      this.max = `${fechaF[2]}-${fechaF[1]}-${fechaF[0]}`;
      console.log(this.max);


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
    this.calendarService.getEvents(this.actions)
      .then((events: CalendarSchedulerEvent[]) => {
        this.events = events;
        this.loading = false;
      });

    this.calendarService.getRoomEvents(+this.idAula).subscribe((res: any) => {
      this.eventosCompletos = res.data;
      this.events = res.data.map((elem: any) => {
        return {
          id: elem.idEvento,
          title: elem.title,
          content: elem.content,
          start: elem.start,
          end: elem.end,
          color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
          actions: this.actions,
          status: 'ok' as CalendarSchedulerEventStatus,
          isClickable: true,
          isDisabled: false
        } as CalendarSchedulerEvent;
      });
    });
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe((res: any) => {
      this.roomList = res.data[0];
    });
  }

  getEvaluators(): void {
    this.articulosService.getPaperEvaluators().subscribe((res: any) => {
      // Aca tiene que estar aprobado | entregado
      this.paperList = res.data.filter((x: any) => x.estadoArticuloNombre === 'En espera');
      this.showList = this.paperList.slice();
    });
  }

  getSimposios(): void {
    this.paperService.getSimposiosActivos().subscribe((res: any) => {
      this.simposios = res.data;
    });
  }

  plenariaValues(): any {
    return {
      date: [this.evento.date || ''],
      startHour: [+this.dayStartHour],
      endHour: [+this.dayStartHour],
      startMinute: [0],
      endMinute: [0],
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],
    };
  }

  values(): any {
    return {
      id: [this.evento.id],
      date: [this.evento.date || ''],
      startHour: [+this.evento.startHour || 0],
      endHour: [+this.evento.endHour || 0],
      startMinute: [+this.evento.startMinute || 0],
      endMinute: [+this.evento.endMinute || 0],
      title: [this.evento.title, [Validators.required]],
      desc: [this.evento.desc || '', [Validators.required]],
      idSimposio: [this.evento.idSimposio || '', [Validators.required]],
      idPaper: [this.evento.idPaper || '', [Validators.required]]
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
    this.evento = {
      ...this.evento,
      date: segment.date.toLocaleDateString(),
      startHour: segment.date.toLocaleTimeString().split(':')[0],
      startMinute: segment.date.toLocaleTimeString().split(':')[1],
      endHour: moment(segment.date).add(20, 'm').toDate().toLocaleTimeString().split(':')[0],
      endMinute: moment(segment.date).add(20, 'm').toDate().toLocaleTimeString().split(':')[1],
    };
    this.formEvento = this.formBuild.group(this.values());

    const btnDetalle = document.getElementById('activar-modal');
    btnDetalle.click();
    //   this.events.push({
    //     id: '300',
    //     start: segment.date,
    //     end: moment(segment.date).add(20, 'm').toDate(),
    //     title: 'Segmented 1',
    //     content: 'IMPORTANT EVENT',
    //     color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
    //     isClickable: true,
    //     isDisabled: false,
    // } as CalendarSchedulerEvent);
    // console.log(this.events);
  }

  eventClicked(action: string, event: CalendarSchedulerEvent): void {
    const eventoCompleto = this.eventosCompletos.find((x: any) => {
      return x.idEvento === event.id;
    });
    this.evento = {
      ...this.evento,
      id: event.id,
      date: event.start.toLocaleDateString(),
      startHour: event.start.toLocaleTimeString().split(':')[0],
      startMinute: event.start.toLocaleTimeString().split(':')[1],
      endHour: event.end.toLocaleTimeString().split(':')[0],
      endMinute: event.end.toLocaleTimeString().split(':')[1],
      title: event.title,
      idPaper: eventoCompleto.idArticulo,
      idSimposio: this.evento.idSimposio
    };
    this.formEvento = this.formBuild.group(this.values());

    const btnDetalle = document.getElementById('activar-modal');
    btnDetalle.click();
  }

  simposioSeleccionado(item: any): void {
    // Aca tengo que cargar los papers que correspondan a ese simposio;
    this.showList = this.paperList.filter((elem: any) => +elem.idSimposio === +item);
  }

  submit(): void {
    this.submitted = true;
    if (this.formEvento.invalid) {
      this.toastr.warning('Por favor, complete todos los datos');
      return;
    }
    const form = this.formEvento.controls;
    const fDate = form.date.value.split('/');
    const date = `${fDate[1]}/${fDate[0]}/${fDate[2]}`;

    const start = new Date(date + ' ' + form.startHour.value + ':' + form.startMinute.value);
    const end = new Date(date + ' ' + form.endHour.value + ':' + form.endMinute.value);
    if (start >= end) {
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
      title: form.title.value,
      content: form.desc.value,
      start,
      end,
      idSimposio: form.idSimposio.value,
      idAula: this.idAula,
      idArticulo: form.idPaper
    };

    // Post a BD y Push a la agenda.
    this.calendarService.postEvento(evento).subscribe((res: any) => {
      const btnDismiss = document.getElementById('dismiss');
      btnDismiss.click();
      this.loading = true;
      this.getEventos();
    });
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

    const fDate = form.date.value.split('-');
    const date = `${fDate[1]}/${fDate[2]}/${fDate[0]}`;
    const start = new Date(date + ' ' + form.startHour.value + ':' + form.startMinute.value);
    const end = new Date(date + ' ' + form.endHour.value + ':' + form.endMinute.value);

    if (start >= end) {
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
      title: form.title.value,
      content: form.desc.value,
      start,
      end
    };

    console.log(evento);


    // Post a BD y Push a la agenda.
    this.calendarService.postEvento(evento).subscribe((res: any) => {
      const btnDismiss = document.getElementById('dismissPlenaria');
      btnDismiss.click();
      this.loading = true;
      if (this.idAula) {
        this.getEventos();
      }
      this.formPlenaria.reset();
    });
  }
}
