import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DefineAgendaService } from 'src/app/core/services/define-agenda.service';
import { EvaluatorService } from 'src/app/core/services/evaluator.service';
import { PaperService } from 'src/app/core/services/paper.service';

@Component({
  selector: 'app-informacion-publica-congreso',
  templateUrl: './informacion-publica-congreso.component.html',
  styleUrls: ['./informacion-publica-congreso.component.css']
})
export class InformacionPublicaCongresoComponent implements OnInit {
  symposiumList = [];
  evaluatorsList = [];
  id = '1';
  agenda = {fechaInCongreso: '',
            fechaFinCongreso: '' ,
            fechaLimPapers: '',
            fechaProrrogaPapers: '',
            fechaFinEvaluacion: '',
            fechaFinReEv: '',
            fechaFinInscripTemprana: '',
            fechaFinInscripTardia: '',
            fechaCoerreCongreso: ''};

  constructor(private service: PaperService,
              private evaluatorService: EvaluatorService,
              private agendaService: DefineAgendaService) { }

  ngOnInit(): void {
    this.getSimposios();
    this.getEvaluators();
    this.getFechasImportantes();

  }



  /* Corregir por los nuevos...  */
  getSimposios():any{
    this.service.getSimposiosActivos().subscribe((res: any) => {
      this.symposiumList = res.data;
    });
  }

  getEvaluators():void{
    this.evaluatorService.getEvaluators(0).subscribe((res: any) => {
      this.evaluatorsList = res.data;
    });
  }

  getFechasImportantes():any{
    this.agendaService.getAgenda(this.id).subscribe((res:any)=>{
      this.agenda= res.data[0]
      });
    }
}
