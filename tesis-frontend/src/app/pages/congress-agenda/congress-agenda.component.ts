import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ICongress } from 'src/app/core/models/ICongress';
import { ISchedule } from 'src/app/core/models/ISchedule';
import { ISymposium } from 'src/app/core/models/ISymposium';
import { CongressService } from 'src/app/core/services/congress.service';
import { DefineAgendaService } from 'src/app/core/services/define-agenda.service';
import { PaperService } from 'src/app/core/services/paper.service';
import { SymposiumService } from 'src/app/core/services/symposium.service';

@Component({
  selector: 'app-congress-agenda',
  templateUrl: './congress-agenda.component.html',
  styleUrls: ['./congress-agenda.component.css']
})
export class CongressAgendaComponent implements OnInit {


  congressList: ICongress[] = [];

  simposios: ISymposium[] = [];
  simposiosList: ISymposium[] =  [];
  base: ISymposium[] =  [];

  list = true;
  sympo = false;
  dates = false;
  schedule: ISchedule = {
    Id: 0,
    fechaInCongreso: new Date(),
    fechaFinCongreso: new Date(),
    fechaInInscrip: new Date(),
    fechaFinInscripTemprana: new Date(),
    fechaFinInscripTardia: new Date(),
    fechaLimPapers: new Date(),
    fechaProrrogaPapers: new Date(),
    fechaFinEvaluacion: new Date(),
    fechaFinReEv: new Date(),
    simposios: [],
    aulas: [],
    modalidad: ''
  };;


  constructor(private sympoService: SymposiumService,
              private router: Router,
              private congressService: CongressService,
              private paperService: PaperService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getSimposios();
    this.getCongresos();

  }

  getCongresos(): void {
    this.congressService.getCongressById().subscribe((res: any) => {
      this.congressList = res.data.map((x: any) => {
        return {
          id: x.id,
          sede: x.sede,
          ano: x.año,
          nombre: x.nombre,
          nombre_sede: x.nombre_sede,
          chairPrincipal: x.chairPrincipal,
          coordLocal: x.coordLocal,
          fechaInCongreso: x.fechaInCongreso,
          fechaFinCongreso: x.fechaFinCongreso ,
          fechaLimPapers: x.fechaLimPapers,
          fechaProrrogaPapers: x.fechaProrrogaPapers,
          fechaFinEvaluacion: x.fechaFinEvaluacion,
          fechaFinReEv: x.fechaFinReEv,
          fechaFinInscripTemprana: x.fechaFinInsTemprana,
          fechaFinInscripTardia: x.fechaFinInsTardia,
          modalidad: x.modalidad
        };
      });
    });
  }

  getSimposios(): void {
    this.sympoService.getSymposium().subscribe((res: any) => {
      this.simposios = res.data;
    });
    this.paperService.getSimposiosActivos().subscribe((res: any) => {
      this.simposiosList = res.data;
      this.base = res.data;
    });
  }

  cancelEditDates(): void{
    this.dates = !this.dates;
    this.list = !this.list;
  }

  editDates(item: any): void {
    this.dates = !this.dates;
    this.list = !this.list;
    this.schedule = item;
  }

  cancelEditSympo(): void {
    this.sympo = !this.sympo;
    this.list = !this.list;
  }

  editSympo(item: any): void {
    this.sympo = !this.sympo;
    this.list = !this.list;
  }

  editRooms(item: any): void {
    this.router.navigate(['/room']);
  }



}
