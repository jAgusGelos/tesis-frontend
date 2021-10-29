import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-paper-list',
  templateUrl: './paper-list.component.html',
  styleUrls: ['./paper-list.component.css']
})
export class PaperListComponent implements OnInit {

  @Input() paperList: any[];
  @Output() editPaperEvent = new EventEmitter();
  @Output() deletePaperEvent = new EventEmitter();
  @Output() newPaperEvent = new EventEmitter();
  @Output() finalPaperEvent = new EventEmitter();
  @Output() revisionEvent = new EventEmitter();
  showList: any[];

  constructor( private toastr: ToastrService ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.showList = this.paperList.slice().sort((item: any) => item.enviado_corregir ? 0 : -1);
  }

  toggleEdit(item: any): void {
    this.editPaperEvent.emit(item);
  }

  toggleNew(): void {
    this.newPaperEvent.emit();
  }

  toggleRemoveHandled(item: any): void {
    this.toastr
      .show( 'Está seguro que desea eliminar el paper ' + item.nombre +
       '\nToda la configuración creada se perderá', '¿Eliminar Paper?', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        // Aca se hace el camino feliz
        this.deletePaperEvent.emit(item);
      });
  }


  search(filterList): void {
    this.showList = filterList;
  }

  toggleCameraReady(item: any): void {
    this.finalPaperEvent.emit(item);
  }

  toggleRevision(item: any) {
    this.revisionEvent.emit(item);
  }
}
