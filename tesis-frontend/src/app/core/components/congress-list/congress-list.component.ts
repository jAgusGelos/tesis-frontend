import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';


@Component({
  selector: 'app-congress-list',
  templateUrl: './congress-list.component.html',
  styleUrls: ['./congress-list.component.css']
})
export class CongressListComponent implements OnInit {

  @Input() congressList = [];
  @Output() editCongressEvent = new EventEmitter();
  @Output() newCongressEvent = new EventEmitter();
  @Output() deleteCongressEvent = new EventEmitter();
  @Output() scoreEvaluatorsEvent = new EventEmitter();
  
  constructor(private toastr: ToastrService,
    ) { }


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleEdit(item: any): void {
    this.editCongressEvent.emit(item);
  }

  toggleNew(): void {
    this.newCongressEvent.emit();
  }
  toggleRemoveHandled(item: any): void {
    this.toastr
      .show( 'Si eliminas el congreso ' + item.nombre + ' toda la configuración se perderá.', '¿Eliminar Congreso?', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        // Aca se hace el camino feliz
        this.deleteCongressEvent.emit(item);

      });
  }

  toggleScoreEvaluators(): void {
    this.scoreEvaluatorsEvent.emit();
  }
}
