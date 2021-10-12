import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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
