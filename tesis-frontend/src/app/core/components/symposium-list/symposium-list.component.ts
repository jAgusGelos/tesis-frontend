import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ISymposium } from '../../models/ISymposium';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-symposium-list',
  templateUrl: './symposium-list.component.html',
  styleUrls: ['./symposium-list.component.css']
})
export class SymposiumListComponent implements OnInit {

  @Input() symposiumList: ISymposium[];
  @Output() editSymposiumEvent = new EventEmitter();
  @Output() newSymposiumEvent = new EventEmitter();
  @Output() deleteSymposiumEvent = new EventEmitter();
  showList = [];

  constructor(private toastr: ToastrService,) { }


  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.showList = this.symposiumList.slice();
  }

  toggleEdit(item: any): void {
    this.editSymposiumEvent.emit(item);
  }

  toggleNew(): void {
    this.newSymposiumEvent.emit();
  }
  toggleRemoveHandled(item: any): void {

    this.toastr
      .show( 'Está seguro que desea eliminar el simposio ' + item.nombre + 
      '\nToda la configuración creada se perderá.', '¿Eliminar Simposio?', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        // Aca se hace el camino feliz
        this.deleteSymposiumEvent.emit(item);

      });
  }

  search(filterList): void {
    this.showList = filterList;

  }
}
