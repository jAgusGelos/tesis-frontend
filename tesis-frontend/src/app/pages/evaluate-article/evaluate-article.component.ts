import { Component, OnInit } from '@angular/core';
import { EvaluatePaperService } from 'src/app/core/services/evaluate-paper.service';
import { PaperService } from 'src/app/core/services/paper.service';

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


  constructor(private paperEvalService: EvaluatePaperService,
              private paperService: PaperService) { }

  ngOnInit(): void {
    this.getPapers();
  }

  postEvaluation(evaluation) {
    this.paperEvalService.postPaperEval(evaluation).subscribe((res: any) =>{
      alert('Los cambios han sido guardados!');
    });
  }

  getPapers(): void {
    this.paperEvalService.getPaperEval().subscribe((res: any) => {
      this.paperList = res.data;
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

  getFile(id) {
    this.paperService.getPaperFile(id).subscribe((res: any) => {
      let archivo: ArrayBuffer = res;
      let blob = new Blob([archivo], { type: 'application/pdf' });
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

  toggleFlagEvaluate() {
    this.flagEvaluate = !this.flagEvaluate;
  }

}
