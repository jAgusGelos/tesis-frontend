import { Component, OnInit } from '@angular/core';
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
  
  constructor(private evaluationService: EvaluateService) {};
  
  ngOnInit(): void 
  {

  }

  getEvaluation(): void {
    this.evaluationService.getEvaluation().subscribe((res: any) => {
      this.evaluation = res.data;
    });
  }

  getPapers(): void {
    this.evaluationService.getPaper().subscribe((res: any) => {
      this.evaluation = res.data;
    })
  }

  evaluationEvent(item: any): void {
    this.evaluating = !this.evaluating;
    this.selectedPaper = item;
    
  }

  deleteEvaluation(item: any): void {
    this.evaluationService.deleteEvaluation(item).subscribe((res: any) =>{
      alert('La evaluación ha sido rechazada');
      window.location.reload()
    })

  }
  
  toggleCreateEvaluation(item: any): void {
    this.evaluationService.postEvaluation(item).subscribe((res: any) => {
      alert('Evaluación correctamente cargada');
      window.location.reload();
    })

  }

  cancelEvaluation(): void {
    this.evaluating = !this.evaluating;
  }

}
