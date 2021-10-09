import { Component, HostListener, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { Subject } from 'rxjs';
import { ArticulosService } from 'src/app/core/services/articulos.service';
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
  hours = Array.from({length: 15}, (_, i) => i + 8 );
  minutes = Array.from({length: 12}, (_, i) => i * 5);
  simposios = [];
  roomList = [];
  loading = false;
  idAula = '';

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
              private articulosService: ArticulosService,
              private router: Router,
              private roomService: RoomService) {
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
    this.formEvento = this.formBuild.group(this.values());
  }



  aulaSelected(idAula: any): void {
    // llamar a los eventos del aula
    console.log(idAula);
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
      idPaper: [this.evento.idPaper || '', [Validators.required] ]
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
      console.log('Aca viene el segmentooo');
      console.log(segment.date.toLocaleDateString());
      console.log(segment.date.toLocaleTimeString());
      console.log(moment(segment.date).add(20, 'm').toDate().toLocaleTimeString());

      this.evento = {
        ...this.evento,
        date: segment.date.toLocaleDateString(),
        startHour: segment.date.toLocaleTimeString().split(':')[0],
        startMinute: segment.date.toLocaleTimeString().split(':')[1],
        endHour: moment(segment.date).add(20, 'm').toDate().toLocaleTimeString().split(':')[0],
        endMinute: moment(segment.date).add(20, 'm').toDate().toLocaleTimeString().split(':')[1],
      };
      console.log(this.evento);
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
      this.evento = {
        ...this.evento,
        id: event.id,
        date: event.start.toLocaleDateString(),
        startHour: event.start.toLocaleTimeString().split(':')[0],
        startMinute: event.start.toLocaleTimeString().split(':')[1],
        endHour: event.end.toLocaleTimeString().split(':')[0],
        endMinute: event.end.toLocaleTimeString().split(':')[1],
        title: event.title
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
    console.log(this.formEvento);
    if (this.formEvento.invalid) {
      alert('Por favor complete todos los datos.');
      return;
    }
    const form = this.formEvento.controls;
    const start = new Date(form.date.value + ' '  + form.startHour.value + ':' + form.startMinute.value);
    const end = new Date(form.date.value + ' ' + form.endHour.value + ':' + form.endMinute.value);

    if (start >= end) {
      alert('Hora inválida');
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

    // Post a BD y Push a la agenda.
    this.events.push(
      {
        id: '55',
        start,
        end,
        title: form.title.value,
        content: form.desc.value,
        color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
        actions: this.actions,
        status: 'ok' as CalendarSchedulerEventStatus,
        isClickable: true,
        isDisabled: false
    });
    const btnDismiss = document.getElementById('dismiss');
    btnDismiss.click();
    this.loading = true;
    this.getEventos();
  }
}