import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paper-list',
  templateUrl: './paper-list.component.html',
  styleUrls: ['./paper-list.component.css']
})
export class PaperListComponent implements OnInit {

  @Input() paperList = [
    {id: '123', nombre: 'Probando un paper', estado: 'Subido'},
    {id: '123', nombre: 'probando otro paper', estado: 'Pendiente'}];
  @Output() editPaperEvent = new EventEmitter();
  @Output() deletePaperEvent = new EventEmitter();
  @Output() newPaperEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit(item: any): void {
    this.editPaperEvent.emit(item);
  }

  toggleNew(): void {
    this.newPaperEvent.emit();
  }

  toggleRemoveHandled(item: any): void {
    if (confirm('Esta seguro desea eliminar el paper: ' + item.nombre +
    '\nToda la configuración creada se perderá')) {
      this.deletePaperEvent.emit(item);
    }

  }
}
