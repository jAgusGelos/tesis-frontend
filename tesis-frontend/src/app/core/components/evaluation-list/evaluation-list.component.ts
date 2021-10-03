import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.css']
})
export class EvaluationListComponent implements OnInit {

  @Input() evaluationList: any[];
  @Output() editEvaluationEvent = new EventEmitter();
  @Output() newEvaluationEvent = new EventEmitter();
  @Output() deleteEvaluationEvent = new EventEmitter();
  showList = [];

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.showList = this.evaluationList.slice();
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

  search(filterList): void {
    this.showList = filterList;
  }



}
