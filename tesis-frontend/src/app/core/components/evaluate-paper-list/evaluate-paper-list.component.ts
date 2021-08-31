import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-evaluate-paper-list',
  templateUrl: './evaluate-paper-list.component.html',
  styleUrls: ['./evaluate-paper-list.component.css']
})
export class EvaluatePaperListComponent implements OnInit {

  @Input() paperList = [];
  @Output() EvaluationEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleEvaluate(item: any): void {
    this.EvaluationEvent.emit(item);
  }
}


