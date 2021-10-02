import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

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

  constructor(private toastr: ToastrService,
  ) { }

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
    this.toastr
      .show( 'Esta seguro que desea eliminar la pregunta ' + item.pregunta + '\nToda la configuración creada se perderá', 'Eliminar Pregunta', {
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
