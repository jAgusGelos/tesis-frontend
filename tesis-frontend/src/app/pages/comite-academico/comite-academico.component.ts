import { Component, OnInit } from '@angular/core';
import { EvaluatorService } from 'src/app/core/services/evaluator.service';
import { PaperService } from 'src/app/core/services/paper.service';

@Component({
  selector: 'app-comite-academico',
  templateUrl: './comite-academico.component.html',
  styleUrls: ['./comite-academico.component.css']
})
export class ComiteAcademicoComponent implements OnInit {
  symposiumList = [];
  evaluatorsList = [];

  constructor(private service: PaperService,
              private evaluatorService: EvaluatorService) { }

  ngOnInit(): void {
    this.getSimposios();
    this.getEvaluators();

  }

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





}
