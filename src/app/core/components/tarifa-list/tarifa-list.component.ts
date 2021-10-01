import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITarifa } from '../../models/itarifa';

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

  constructor() { }

  ngOnInit(): void {
  }

  toggleNew(): void {
    this.crearTarifaEvent.emit();
  }

  toggleEdit(item): void {
    this.editarTarifaEvent.emit(item);
  }

  toggleRemoveHandled(item: any): void {
    this.eliminarTarifaEvent.emit(item.id);
  }

  modalDelete(item) {
    this.selectedItem = item;
    this.message.header = 'Aviso';
    this.message.body = '¿Seguro que desea eliminar la tarifa ' + item.nombre + '?';
    document.getElementById('modal-delete-btn').click();
  }
}
