import { Component, OnInit } from '@angular/core';
import { EvaluatePaperService } from 'src/app/core/services/evaluate-paper.service';
import { EvaluationService } from 'src/app/core/services/evaluation.service';
import { EvaluatorService } from 'src/app/core/services/evaluator.service';

@Component({
  selector: 'app-evaluate-article',
  templateUrl: './evaluate-article.component.html',
  styleUrls: ['./evaluate-article.component.css']
})
export class EvaluateArticleComponent implements OnInit {


  paperList = [
    {nombre: 'Paper de prueba', estado: 'Pdte Evaluacion'},
    {nombre: 'Paper de prueba 2', estado: 'Evaluando'},
    {nombre: 'Paper de prueba 3', estado: 'Evaluado'}
  ];
  paper = {};
  test = [
    {idPregunta: '123', pregunta: 'Esta es la pregunta bla bla'}
  ];
  flagEvaluate = false;


  constructor(private paperEvalService: EvaluatePaperService,
              private evaluationService: EvaluatorService) { }

  ngOnInit(): void {
    // this.getPapers();
  }


  getPapers(): void {
    this.paperEvalService.getPaperEval().subscribe((res: any) => {
      this.paperList = res.data;
    });
  }

  getTest(): void {
    this.paperEvalService.getTest().subscribe((res: any) => {
      this.test = res.data;
    });
  }

  evaluate(paper): void {
    this.paper = paper;
    this.flagEvaluate = !this.flagEvaluate;
  }

  acceptEvaluate(paper):void{
    this.paper = paper;
    this.evaluationService.acceptEvaluationPaper(this.paper).subscribe(
      (res:any) => {alert('La evaluación ha sido aceptada.')}
    )
  }
  cancelEvaluate(paper):void{
    this.paper = paper;
    this.evaluationService.cancelarEvaluationPaper(this.paper).subscribe(
      (res: any) =>{alert('La evaluación ha sido rechazada.');
    })
  }

  
}
