import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvaluator } from 'src/app/core/models/ievaluator';
import { IPaper } from 'src/app/core/models/IPaper';

@Component({
  selector: 'app-evaluation-detail',
  templateUrl: './evaluation-detail.component.html',
  styleUrls: ['./evaluation-detail.component.css']
})
export class EvaluationDetailComponent implements OnInit {

  constructor(private router: Router) { }

  evaluator1: IEvaluator = {id: '1', nombre:'A', puntuacion:'1'};
  evaluator2: IEvaluator = {id: '2', nombre:'B', puntuacion:'1'};
  evaluator3: IEvaluator = {id: '3', nombre:'C', puntuacion:'1'};
  
  paper: IPaper = {id: '1', nombre:'Paper1', autores:['A',],responsable:'A', simposio:'Simposio', archivo: null, estado:'Evaluado', };

  ngOnInit(): void {
  }
}
