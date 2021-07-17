import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAgenda } from '../../models/iagenda';
import { CongressService } from '../../services/congress.service';
import { DefineAgendaService } from '../../services/define-agenda.service';



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  @Input() agenda: IAgenda = {
    Id: 0,
    FechaInCongreso: new Date(),
    FechaFinCongreso: new Date(),
    FechaInInscrip: new Date(),
    FechaFinInscrip: new Date(),
    FechaFinInscripTardia: new Date(),
    FechaLimPapers: new Date(),
    FechaProrrogaPapers: new Date(),
    FechaFinEvaluacion: new Date(),
    FechaFinReEv: new Date()
  };

  congresos = [
    'Congreso 1',
    'Congreso 2',
    'Congreso 3',
  ];
  
  formCongress: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private congressService: CongressService,
    private agendaService: DefineAgendaService) { }

  ngOnInit(): void {
    this.formCongress = this.formBuilder.group({
    congreso: ['', [Validators.required]],
    FechaInCongreso: [this.agenda.FechaInCongreso, [Validators.required]],
    FechaFinCongreso: [this.agenda.FechaFinCongreso, [Validators.required]],
    FechaInInscrip: [this.agenda.FechaInInscrip, [Validators.required]],
    FechaFinInscrip: [this.agenda.FechaFinInscrip, [Validators.required]],
    FechaFinInscripTardia: [this.agenda.FechaFinInscripTardia, [Validators.required]],
    FechaLimPapers: [this.agenda.FechaLimPapers, [Validators.required]],
    FechaProrrogaPapers: [this.agenda.FechaProrrogaPapers, [Validators.required]],
    FechaFinEvaluacion: [this.agenda.FechaFinEvaluacion, [Validators.required]],
    FechaFinReEv: [this.agenda.FechaFinReEv, [Validators.required]]
    });

    this.getCongresos();
  }

  getCongresos() {
    this.congressService.getCongress().subscribe((res: any) => {this.congresos = res.data});
  };

  guardar() {
    this.agendaService.postAgenda(this.agenda).subscribe((res: any) => {this.agenda = res.data});

  };

}
