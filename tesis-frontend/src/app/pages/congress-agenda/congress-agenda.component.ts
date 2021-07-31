import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ICongress } from 'src/app/core/models/ICongress';
import { ISchedule } from 'src/app/core/models/ISchedule';
import { ISymposium } from 'src/app/core/models/ISymposium';
import { DefineAgendaService } from 'src/app/core/services/define-agenda.service';
import { SymposiumService } from 'src/app/core/services/symposium.service';

@Component({
  selector: 'app-congress-agenda',
  templateUrl: './congress-agenda.component.html',
  styleUrls: ['./congress-agenda.component.css']
})
export class CongressAgendaComponent implements OnInit {


  congressList: ICongress[] = [
    {id: '123', nombre: 'Probando', sede: 'Tu casa', ano: 2021, chairPrincipal: '', coordLocal: ''}];

  simposios: ISymposium[] = [
    {id: '1', nombre: 'Probando', descripcion: 'TRial'},
    {id: '2', nombre: 'Probando 2', descripcion: 'TRial 2'}];
  simposiosList: ISymposium[] =  [
    {id: '1', nombre: 'Probando', descripcion: 'TRial'}];
  base: ISymposium[] =  [
    {id: '1', nombre: 'Probando', descripcion: 'TRial'}];

  list = true;
  sympo = false;
  dates = false;
  schedule: ISchedule = {

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
  };;


  constructor(private sympoService: SymposiumService,
              private router: Router,
              private scheduleService: DefineAgendaService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // this.getSimposios()

  }

  getSimposios(): void {
    this.sympoService.getSymposium().subscribe((res: any) => {
      this.simposios = res.data;
    });
    this.sympoService.getSymposiumCongress().subscribe((res: any) => {
      this.simposiosList = res.data;
      this.base = res.data;
    });
  }

  addSymposium(items: ISymposium[]): void {
    const newSymps = items.filter((item: ISymposium) => {
      const exist = this.base.some((x: any) => {
        if (x.id === item.id) {
          return true;
        }
      });
      if (!exist) {
        return item.id;
      }
      return;
    });
    let todoOk = true;
    newSymps.forEach((item: any) => {
      this.sympoService.postSymposiumCongress(item).subscribe((res: any) => {
        if (res.err) {
          todoOk = false;
        }
      });
    });
    if (todoOk) {
      alert('Simposios Cargados Correctamente');
    }
    else{
      alert('Ha ocurrido un problema.' +
      '\nPor favor intente de nuevo más tarde' +
      '\nEs posible que algunos simposios no se hayan cargado');
    }
  }

  cancelEditDates(): void{
    this.dates = !this.dates;
    this.list = !this.list;
  }

  editDates(item: any): void {
    this.dates = !this.dates;
    this.list = !this.list;
    this.scheduleService.getAgenda(item.id).subscribe((res: any) => {
      this.schedule = res.data;
    });
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
    this.router.navigate(['/room/' + item.id]);
  }



}
