import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ITarifa } from '../../models/ITarifa';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-tarifa-list',
  templateUrl: './tarifa-list.component.html',
  styleUrls: ['./tarifa-list.component.css']
})
export class TarifaListComponent implements OnInit {

  @Input() tarifaList: ITarifa[];
  @Output() crearTarifaEvent = new EventEmitter();
  @Output() editarTarifaEvent = new EventEmitter();
  @Output() eliminarTarifaEvent = new EventEmitter();
  message = {header: '', body: ''};
  selectedItem: ITarifa = null;

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  toggleNew(): void {
    this.crearTarifaEvent.emit();
  }

  toggleEdit(item): void {
    this.editarTarifaEvent.emit(item);
  }

  toggleRemoveHandled(item: any): void {
    this.toast
      .show( '¿Seguro que desea eliminar la tarifa ' + item.nombre + '?', 'Eliminar Tarifa', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        this.eliminarTarifaEvent.emit(item.id);
      });
  }
}
