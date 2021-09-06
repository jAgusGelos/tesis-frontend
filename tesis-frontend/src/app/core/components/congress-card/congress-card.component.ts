import { Component, Input, OnInit } from '@angular/core';
import { ICongress } from '../../models/ICongress';
import { ISchedule } from '../../models/ISchedule';
import { DefineAgendaService } from '../../services/define-agenda.service';

@Component({
  selector: 'app-congress-card',
  templateUrl: './congress-card.component.html',
  styleUrls: ['./congress-card.component.css']
})
export class CongressCardComponent implements OnInit {

  @Input() congress: ICongress;
  agenda = [];
  @Input() sedes=[];
  sede;
  constructor(/* private agendaService: DefineAgendaService */) { }

  ngOnInit(): void {
    this.getDates();
    /* this.getAgenda(); */
    console.log(this.congress)
  }

  
  fechaFinInscripTemprana: Date = new Date("September 5 2021 12:30");
  fechaFinInscripTardia: Date = new Date("October 5 2021 12:30");
  fechaTemprana: string;
  fechaTardia: string;

  getDates():void{
    this.fechaTemprana = this.fechaFinInscripTemprana.getDate() + '/' 
                      + this.fechaFinInscripTemprana.getMonth() + '/'
                      + this.fechaFinInscripTemprana.getFullYear();
    this.fechaTardia = this.fechaFinInscripTardia.getDate() + '/' 
                      + this.fechaFinInscripTardia.getMonth() + '/'
                      + this.fechaFinInscripTardia.getFullYear();
  }

  /* getAgenda():void{
    this.agendaService.getAgenda(this.congress.id).subscribe((res: any) => {
          this.agenda = res.data;
        });
  } */
}
