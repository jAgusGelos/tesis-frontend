import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-evaluate-paper-form',
  templateUrl: './evaluate-paper-form.component.html',
  styleUrls: ['./evaluate-paper-form.component.css']
})
export class EvaluatePaperFormComponent implements OnInit {

  constructor() { }
  @Input() paper: any;
  @Input() evaluation: any;
  @Output() postEvaluation = new EventEmitter();

  ngOnInit(): void {
  }

}