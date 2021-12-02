import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

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


  constructor(private toastr: ToastrService) { }

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
    this.toastr
    .show( 'Esta seguro que desea rechazar la evaluación de ' + item.nombreArticulo + '\nEsto repercutirá en su calificación como evaluador', 'Rechazar evaluación', {
      toastComponent: CustomToastComponent,
      disableTimeOut: true,
      tapToDismiss: false,
      enableHtml: true
    })
    .onAction.subscribe(() => {
      // Aca se hace el camino feliz
      this.EvaluationCancelEvent.emit(item);

    });
  }

  search(filterList): void {
    this.showList = filterList;
  }
}


