import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-evaluate-paper-list',
  templateUrl: './evaluate-paper-list.component.html',
  styleUrls: ['./evaluate-paper-list.component.css']
})
export class EvaluatePaperListComponent implements OnInit {

  @Input() paperList = [
    { id: '123', pregunta: 'Probando Esto es una pregunta', simposio: 'Este es un simp' },
    { id: '123', pregunta: 'Probando Esto es una pregunta 2', simposio: 'Este es un simp 2' }];
  @Output() editEvaluationEvent = new EventEmitter();
  @Output() newEvaluationEvent = new EventEmitter();
  @Output() deleteEvaluationEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleEvaluate(item: any): void {
    this.editEvaluationEvent.emit(item);
  }


}


