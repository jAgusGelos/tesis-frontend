import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-evaluate-list',
  templateUrl: './evaluate-list.component.html',
  styleUrls: ['./evaluate-list.component.css']
})
export class EvaluateListComponent implements OnInit {

  @Input() paperList = [
    {id: '123', paper: 'Nombre de mentira 1', estado: 'Evaluado'},
    {id: '123', paper: 'Nombre de mentira 2', estado: 'Pdte Evaluación'}];
  @Output() evaluationEvent = new EventEmitter();
  @Output() deleteEvaluationEvent = new EventEmitter();

  constructor(private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleEdit(item: any): void {
    this.evaluationEvent.emit(item);
  }

  toggleRemoveHandled(item: any): void {
    this.toastr
      .show( 'Esta seguro que desea rechazar la evaluación de ' + item.paper + '\nEsto repercutirá en su calificación como evaluador', 'Rechazar evaluación', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        // Aca se hace el camino feliz
        this.deleteEvaluationEvent.emit(item);

      });
  }
}
