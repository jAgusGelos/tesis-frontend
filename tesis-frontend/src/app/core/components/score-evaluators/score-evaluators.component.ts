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

  selectFlag = false;

  evaluatorsList: [{
    evaluator: IEvaluator;
    score: Number;
  }]
  scoreList: Number[] = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10]


  constructor( private evaluatorService: EvaluatorService) { }

  ngOnInit(): void {
    this.fillEvaluatorsList();
  }

  score() {
    this.selectFlag = true;
  }

  fillEvaluatorsList() {
    let evaluators: IEvaluator[];
    let score: Number;
    this.evaluatorService.getEvaluators().subscribe((res: any) => {
        evaluators = res.data;
    });
    for (let index = 0; index < evaluators.length; index++) {
      this.evaluatorsList.push({evaluator: evaluators[index], score: 1})
    }
  }

}
