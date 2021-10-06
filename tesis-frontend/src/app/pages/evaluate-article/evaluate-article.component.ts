import { Component, OnInit } from '@angular/core';
import { EvaluatePaperService } from 'src/app/core/services/evaluate-paper.service';
import { PaperService } from 'src/app/core/services/paper.service';
import { EvaluationService } from 'src/app/core/services/evaluation.service';
import { EvaluatorService } from 'src/app/core/services/evaluator.service';


@Component({
  selector: 'app-evaluate-article',
  templateUrl: './evaluate-article.component.html',
  styleUrls: ['./evaluate-article.component.css']
})
export class EvaluateArticleComponent implements OnInit {


  paperList = [];
  paper = [];
  items = [];
  flagEvaluate = false;
  ok = false;


  constructor(private paperEvalService: EvaluatePaperService,
              private evaluationService: EvaluatorService,
              private paperService: PaperService) { }


  ngOnInit(): void {
    this.getPapers();
  }

  getPapers(): void {
    this.paperEvalService.getPaperEval().subscribe((res: any) => {
      this.paperList = res.data;
      this.ok = true;
    });
  }

  getItems(idArticulo): void {
    this.paperEvalService.getTest(idArticulo).subscribe((res: any) => {
      this.items = res.data;
    });
  }

  evaluate(paper): void {
    this.paper = paper;
    this.flagEvaluate = !this.flagEvaluate;
  }

  getFile(id): void {
    this.paperService.getPaperFile(id).subscribe((res: any) => {
      const archivo: ArrayBuffer = res;
      const blob = new Blob([archivo], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  }

  toggleFlagEvaluate(): void {
    this.flagEvaluate = !this.flagEvaluate;
  }

  saveEvaluation(ev: any): void {
    this.paperEvalService.editarEvaluacion(ev).subscribe((res: any) => {
      if (ev.submit) {
        this.submitEvaluation(ev);
        return;
      } else {
        this.getPapers();
        alert('La evaluación ha sido guardada!');
      }
    });
  }

  submitEvaluation(ev): void {
    this.paperEvalService.enviarEvaluacion(ev).subscribe((res: any) => {
      alert('La evaluación ha sido enviada!');
      this.toggleFlagEvaluate();
      this.getPapers();
    });
  }

  acceptEvaluate(paper): void {
    this.paper = paper;
    this.evaluationService.acceptEvaluationPaper(this.paper).subscribe(
      (res: any) => { alert('La evaluación ha sido aceptada.');
    }
    );
  }

  cancelEvaluate(paper): void {
    this.paper = paper;
    this.evaluationService.cancelarEvaluationPaper(this.paper).subscribe(
      (res: any) => {
        alert('La evaluación ha sido rechazada.');
      });
  }
}
