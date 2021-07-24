import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISymposium } from '../../models/ISymposium';

@Component({
  selector: 'app-symposium-list',
  templateUrl: './symposium-list.component.html',
  styleUrls: ['./symposium-list.component.css']
})
export class SymposiumListComponent implements OnInit {

  @Input() symposiumList: ISymposium[] =  [{ id: '0', nombre: 'Probando', desc: 'Esto es una prueba' }];
  @Output() editSymposiumEvent = new EventEmitter();
  @Output() newSymposiumEvent = new EventEmitter();
  @Output() deleteSymposiumEvent = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }

  toggleEdit(item: any): void {
    this.editSymposiumEvent.emit(item);
  }

  toggleNew(): void {
    this.newSymposiumEvent.emit();
  }
  toggleRemoveHandled(item: any): void {
    if (confirm('Esta seguro desea eliminar el Simposio: ' + item.nombre +
    '\nToda la configuración creada se perderá')) {
      this.deleteSymposiumEvent.emit(item);
    }

  }
}
