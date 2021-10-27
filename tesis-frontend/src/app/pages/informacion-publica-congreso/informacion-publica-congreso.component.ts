import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CongressService } from 'src/app/core/services/congress.service';
import { DefineAgendaService } from 'src/app/core/services/define-agenda.service';
import { EvaluatorService } from 'src/app/core/services/evaluator.service';
import { PaperService } from 'src/app/core/services/paper.service';
import { PublicService } from 'src/app/core/services/public.service';

@Component({
  selector: 'app-informacion-publica-congreso',
  templateUrl: './informacion-publica-congreso.component.html',
  styleUrls: ['./informacion-publica-congreso.component.css']
})
export class InformacionPublicaCongresoComponent implements OnInit {
  chairPrincipal = {};
  chairsList = [];
  evaluatorsList = [];
  id : number;
  agenda = {fechaInCongreso: '',
            fechaFinCongreso: '' ,
            fechaLimPapers: '',
            fechaProrrogaPapers: '',
            fechaFinEvaluacion: '',
            fechaFinReEv: '',
            fechaFinInscripTemprana: '',
            fechaFinInscripTardia: '',
            fechaCoerreCongreso: ''};
  programa = [{dia:{fecha:'26/10/21',
               eventos: [{nombre:'BD', horarioInicio:'10:30', horarioFin: '11:00', aula:'Auditorio', 
                          expositores: ['Ayelen Coronel', 'Juan Ledesma']},
                         {nombre:'IA', horarioInicio:'11:00', horarioFin: '11:30', aula:'Auditorio', 
                         expositores: ['Coronel', 'Ledesma']},
                         {nombre:'SGO', horarioInicio:'10:30', horarioFin: '11:00', aula:'Aula Magna', 
                         expositores: ['Agustín Marinangeli', 'Gabriel Rosales']}
                        ]}},
             {dia:{fecha:'27/10/21',
             eventos: [{nombre:'CI', horarioInicio:'10:30', horarioFin: '11:00', aula:'Salón de Actos', 
                        expositores: ['Ayelen Coronel', 'Juan Ledesma']},
                       {nombre:'CON', horarioInicio:'11:00', horarioFin: '11:30', aula:'Aula 202', 
                       expositores: ['Coronel', 'Ledesma']},
                       {nombre:'PF', horarioInicio:'10:30', horarioFin: '11:00', aula:'Zoom', 
                       expositores: ['Agustín Marinangeli', 'Gabriel Rosales']}
                      ]}}
            ];

 /*  programa = [{fecha: '24/10', aula: 'Aula Magna', evento: 'Charla Ciberseguridad', horario: '10:30', horarioFin: '11:30',expositores: [{nombreExp:'Ayelén Coronel'}, {nombreExp: 'Juan Ignacio Ledesma'}] },
              {fecha: '25/10', aula: 'Salón de actos', evento: 'Expo Paper Base de Datos', horario: '13:00', horarioFin: '14:00',expositores: [{nombreExp:'Juan Ignacio Ledesma'}, {nombreExp: 'Ayelén Coronel'}] },
              {fecha: '26/10', aula: 'Auditorio', evento: 'Expo IA', horario: '10:00', horarioFin: '11:30',expositores: [{nombreExp:'Ayelén Coronel'}, {nombreExp: 'Juan Ignacio Ledesma'}] }];

   */
              constructor(private publicService: PublicService,
              /* private evaluatorService: EvaluatorService, */
              private agendaService: DefineAgendaService) { }

  ngOnInit(): void {
    let url = window.location.href;
    let url_array = url.split('/');
    this.id = parseInt(url_array[url_array.length-1])
   
    this.getSimposios();
    this.getEvaluators();
    this.getFechasImportantes();

  

  }

  /* Corregir por los nuevos...  */
  getSimposios():any{
    this.publicService.getChairsSimposiosPublic(this.id).subscribe((res: any) => {
      this.chairPrincipal = res.data.chairPrincipal;
      this.chairsList = res.data.chairsSecundarios;
      console.log(res.data)
    });
  }

  getEvaluators():void{
    this.publicService.getEvaluators().subscribe((res: any) => {
      this.evaluatorsList = res.data;
    });
  }

  getFechasImportantes():any{
    this.agendaService.getAgenda(this.id.toString()).subscribe((res:any)=>{
      this.agenda= res.data[0]
      });
  }
}
