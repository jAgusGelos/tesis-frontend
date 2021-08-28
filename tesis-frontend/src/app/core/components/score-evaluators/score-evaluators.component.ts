import { Component, OnInit } from '@angular/core';
import { IEvaluation } from '../../models/IEvaluation';
import { IEvaluator } from '../../models/IEvaluator';
import { EvaluatorService } from '../../services/evaluator.service';

@Component({
  selector: 'app-score-evaluators',
  templateUrl: './score-evaluators.component.html',
  styleUrls: ['./score-evaluators.component.css']
})
export class ScoreEvaluatorsComponent implements OnInit {


  evaluatorsList: any[] = [{nombre: String, score: Number, edit: Boolean}];

  scoreList: Number[] = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10];


  constructor( private evaluatorService: EvaluatorService) { }

  ngOnInit(): void {
    this.fillEvaluatorsList();
  }

  score(s: Number, index) {
    (document.getElementById('boton') as HTMLButtonElement).disabled = false;
    this.evaluatorsList[index].score = s;
    this.evaluatorsList[index].edit = false;
  }

  editScore(index) {
    this.evaluatorsList[index].edit = !this.evaluatorsList[index].edit;
  }
  
  fillEvaluatorsList() {
    this.evaluatorsList = [
      {nombre: 'Evaluador 1', score: 5, edit: false},
      {nombre: 'Evaluador 2', score: null, edit: true},
      {nombre: 'Evaluador 3', score: 10, edit: false},
      {nombre: 'Evaluador 4', score: null, edit: true},
      {nombre: 'Evaluador 5', score: 1, edit: false},
      {nombre: 'Evaluador 6', score: null, edit: true},
      {nombre: 'Evaluador 7', score: 3, edit: false},]
  }
  

}
