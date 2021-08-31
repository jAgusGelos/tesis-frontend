import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-evaluate-list',
  templateUrl: './evaluate-list.component.html',
  styleUrls: ['./evaluate-list.component.css']
})
export class EvaluateListComponent implements OnInit {

  @Input() paperList = [
    {id: '123', paper: 'Nombre de mentira 1', estado: 'Evaluado'},
    {id: '123', paper: 'Nombre de mentira 2',estado: 'Pdte Evaluación'}];
  @Output() evaluationEvent = new EventEmitter();
  @Output() deleteEvaluationEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleEdit(item: any): void {
    this.evaluationEvent.emit(item);
  }

  toggleRemoveHandled(item: any): void {
    if (confirm('Esta seguro desea rechazar la evaluación de: ' + item.paper +
    '\nEsto repercutirá en su calificación como evaluador')) {
      this.deleteEvaluationEvent.emit(item);
    }
  }
}
