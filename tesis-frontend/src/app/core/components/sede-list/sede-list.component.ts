import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ISede } from '../../models/ISede';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-sede-list',
  templateUrl: './sede-list.component.html',
  styleUrls: ['./sede-list.component.css']
})
export class SedeListComponent implements OnInit {

  @Input() sedeList: ISede[];
  @Output() crearSedeEvent = new EventEmitter();
  @Output() editarSedeEvent = new EventEmitter();
  @Output() eliminarSedeEvent = new EventEmitter();
  showList = [];

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.showList = this.sedeList.slice();
  }

  toggleNew(): void {
    this.crearSedeEvent.emit();
  }

  toggleEdit(item): void {
    this.editarSedeEvent.emit(item);
  }

  toggleRemoveHandled(item: any): void {
    this.toastr
      .show( '¿Seguro que desea borrar la sede ' + item.nombre + '?', 'Borrar Sede', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        this.eliminarSedeEvent.emit(item);
      });
  }

  search(filterList): void {
    this.showList = filterList;
  }
}
