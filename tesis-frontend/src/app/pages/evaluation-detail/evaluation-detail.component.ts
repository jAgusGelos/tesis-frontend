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
  paperSeleccionado
 

  ngOnInit(): void {
  }
}
