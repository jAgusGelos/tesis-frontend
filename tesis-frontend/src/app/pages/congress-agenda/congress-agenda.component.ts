import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ISymposium } from 'src/app/core/models/ISymposium';
import { SymposiumService } from 'src/app/core/services/symposium.service';

@Component({
  selector: 'app-congress-agenda',
  templateUrl: './congress-agenda.component.html',
  styleUrls: ['./congress-agenda.component.css']
})
export class CongressAgendaComponent implements OnInit {

  simposios: ISymposium[] = [
    {id: '1', nombre: 'Probando', desc: 'TRial'},
    {id: '2', nombre: 'Probando 2', desc: 'TRial 2'}];
  simposiosList: ISymposium[] =  [
    {id: '1', nombre: 'Probando', desc: 'TRial'}];
  base: ISymposium[] =  [
    {id: '1', nombre: 'Probando', desc: 'TRial'}];

  list = true;
  sympo = false;
  dates = false;


  constructor(private sympoService: SymposiumService,
              private router: Router) { }

  ngOnInit(): void {
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

  cancelSymposium(): void {
    this.router.navigate(['/']);
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

  editDates(item: any): void {
    this.dates = !this.dates;
    this.list = !this.list;
  }

  editSympo(item: any): void {
    this.sympo = !this.sympo;
    this.list = !this.list;
  }

}
