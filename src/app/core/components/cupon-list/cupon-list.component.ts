import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cupon-list',
  templateUrl: './cupon-list.component.html',
  styleUrls: ['./cupon-list.component.css']
})
export class CuponListComponent implements OnInit {

  @Input() cuponList = [];
  @Output() crearCuponEvent = new EventEmitter();
  @Output() editarCuponEvent = new EventEmitter();
  @Output() eliminarCuponEvent = new EventEmitter();
  message = {header: '', body: ''};
  selectedItem = null;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNew(): void {
    this.crearCuponEvent.emit();
  }

  toggleEdit(item): void {
    this.editarCuponEvent.emit(item);
  }

  toggleRemoveHandled(item: any): void {
    this.eliminarCuponEvent.emit(item);
  }
}
