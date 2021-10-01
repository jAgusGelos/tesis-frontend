import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvaluation } from 'src/app/core/models/IEvaluation';
import { EvaluationService } from 'src/app/core/services/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  evaluationList = [];
  edit = false;
  evaluation = {};

  constructor(private evaluationService: EvaluationService,
              private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
      }; }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getEvaluation();
  }

  getEvaluation(): void {
    this.evaluationService.getEvaluation(1).subscribe((res: any) => {
      this.evaluationList = res.data;
    });
  }

  newEvaluation(): void {
    this.edit = !this.edit;
    this.evaluation = {};
  }

  editEvaluation(evaluation: IEvaluation): void {
    this.edit = !this.edit;
    this.evaluation = evaluation;

  }

  deleteEvaluation(item: IEvaluation): void {
    this.evaluationService.deleteEvaluation(item).subscribe((res: any) => {
      alert('La evaluacion ha sido eliminada correctamente');
      window.location.reload();
    });
  }

  /**
   *
   * @param item
   * Recibe una evaluacion, chequea que tenga un id.
   * Si lo tiene hace un PUT al back. Actualiza una evaluacion creado.
   * Si no lo tiene crea una nueva evaluacion.
   */
  toggleCreateEvaluation(item: IEvaluation): void {
    if (item.id === (undefined || '')) {
      this.evaluationService.postEvaluation(item).subscribe((res: any) => {
        alert('Evaluación Creada Correctamente');
        this.router.navigateByUrl('/evaluacion');
      });
    }
    else {
      this.evaluationService.putEvaluation(item).subscribe((res: any) => {
        alert('Evaluación Modificada Correctamente');
        this.router.navigateByUrl('/evaluacion');
      });
    }
  }
}
