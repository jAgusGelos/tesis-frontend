import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.css']
})
export class EvaluationListComponent implements OnInit {

  @Input() evaluationList = [
    {id: '123', pregunta: 'Probando Esto es una pregunta', simposio: 'Este es un simp'},
    {id: '123', pregunta: 'Probando Esto es una pregunta 2', simposio: 'Este es un simp 2'}];
  @Output() editEvaluationEvent = new EventEmitter();
  @Output() newEvaluationEvent = new EventEmitter();
  @Output() deleteEvaluationEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleEdit(item: any): void {
    this.editEvaluationEvent.emit(item);
  }

  toggleNew(): void {
    this.newEvaluationEvent.emit();
  }
  toggleRemoveHandled(item: any): void {
    if (confirm('Esta seguro desea eliminar la pregunta: ' + item.pregunta +
    '\nToda la configuración creada se perderá')) {
      this.deleteEvaluationEvent.emit(item);
    }

  }

}
