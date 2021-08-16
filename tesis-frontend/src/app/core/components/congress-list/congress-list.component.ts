import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-congress-list',
  templateUrl: './congress-list.component.html',
  styleUrls: ['./congress-list.component.css']
})
export class CongressListComponent implements OnInit {

  @Input() congressList = [
    {id: '123', nombre: 'Probando', sede: 'Tu casa', ano: '2021'},
    {id: '123', nombre: 'Probando 2', sede: 'Tu casa', ano: '2021'}];
  @Output() editCongressEvent = new EventEmitter();
  @Output() newCongressEvent = new EventEmitter();
  @Output() deleteCongressEvent = new EventEmitter();
  
  constructor() { }

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
    if (confirm('Esta seguro desea eliminar el congreso: ' + item.nombre +
    '\nToda la configuración creada se perderá')) {
      this.deleteCongressEvent.emit(item);
    }

  }
}
