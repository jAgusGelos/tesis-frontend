import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvaluateService } from 'src/app/core/services/evaluate.service';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  evaluating = false;
  selectedPaper = {};
  evaluation = {};
  paperList = []; 

  constructor(private evaluationService: EvaluateService,
              private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
      };
  }

  ngOnInit(): void {


  }

  getEvaluation(): void {
    this.evaluationService.getEvaluation().subscribe((res: any) => {
      this.evaluation = res.data;
    });
  }

  getPapers(): void {
    this.evaluationService.getPaper().subscribe((res: any) => {
      this.evaluation = res.data;
    });
  }

  evaluationEvent(item: any): void {
    this.evaluating = !this.evaluating;
    this.selectedPaper = item;

  }

  deleteEvaluation(item: any): void {
    this.evaluationService.deleteEvaluation(item).subscribe((res: any) => {
      alert('La evaluación ha sido rechazada');
      this.router.navigateByUrl('/evaluar');
    });

  }

  toggleCreateEvaluation(item: any): void {
    this.evaluationService.postEvaluation(item).subscribe((res: any) => {
      alert('Evaluación correctamente cargada');
      this.router.navigateByUrl('/evaluar');
    });

  }

  cancelEvaluation(): void {
    this.evaluating = !this.evaluating;
  }

}
