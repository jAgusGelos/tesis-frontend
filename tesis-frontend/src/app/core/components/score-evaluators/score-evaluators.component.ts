import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IEvaluation } from '../../models/IEvaluation';
import { IEvaluator } from '../../models/iEvaluator';
import { EvaluatorService } from '../../services/evaluator.service';

@Component({
  selector: 'app-score-evaluators',
  templateUrl: './score-evaluators.component.html',
  styleUrls: ['./score-evaluators.component.css']
})
export class ScoreEvaluatorsComponent implements OnInit {


  evaluatorsList: IEvaluator[];

  rows: [{
    evaluator: IEvaluator,
    edit: Boolean
  }]

  scoreList: Number[] = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10];

  constructor( private evaluatorService: EvaluatorService,
              private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.fillEvaluatorsList();
    this.fillRows();
  }

  score(index) {
    let select = <HTMLSelectElement>document.getElementById("selectScore");
    let score = select.options[select.selectedIndex].value;

    if (score == null) {
      this.toastr.show('Seleccione un puntaje para el evaluador.')
      return
    }
    score.toString();
    let evCalification = {
      evaluator: this.rows[index].evaluator,
      score: score
    }
    this.evaluatorService.calificarEvaluador(evCalification).subscribe((res: any) => {
      this.toastr.show(res.data);
      this.rows[index].evaluator.puntuacion = score;
      this.rows[index].edit = false;
    })
  }
  
  fillRows() {
    let evaluator: IEvaluator;
    let edit = false;
    for (let index = 0; index < this.evaluatorsList.length; index++) {
      evaluator = this.evaluatorsList[index];
      this.rows.push({evaluator, edit});
    }
  }

  fillEvaluatorsList() {
    this.evaluatorService.getEvaluators(0).subscribe((res: any) => {
      this.evaluatorsList = res.data;
    });
  }

  toggleEdit(index) {
    this.rows[index].edit = !this.rows[index].edit;
  }
}
