import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-evaluate-paper-list',
  templateUrl: './evaluate-paper-list.component.html',
  styleUrls: ['./evaluate-paper-list.component.css']
})
export class EvaluatePaperListComponent implements OnInit {

  @Input() paperList = [];
  @Output() EvaluationEvent = new EventEmitter();
  @Output() EvaluationAcceptEvent = new EventEmitter();
  @Output() EvaluationCancelEvent = new EventEmitter();
  showList = [];


  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.showList = this.paperList.slice();
  }

  toggleEvaluate(item: any): void {
    this.EvaluationEvent.emit(item);
  }
  toggleAccept(item: any): void {
    this.EvaluationAcceptEvent.emit(item);
  }
  toggleCancel(item: any): void {
    this.EvaluationCancelEvent.emit(item);
  }

  search(filterList): void {
    this.showList = filterList;
  }
}


