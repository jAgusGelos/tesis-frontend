import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-certificate-template-list',
  templateUrl: './certificate-template-list.component.html',
  styleUrls: ['./certificate-template-list.component.css']
})
export class CertificateTemplateListComponent implements OnInit {

  @Input() certList: any[];
  @Output() editCertEvent = new EventEmitter();
  @Output() deleteCertEvent = new EventEmitter();
  @Output() newCertEvent = new EventEmitter();
  showList: any[];

  constructor( private toastr: ToastrService ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.showList = this.certList.slice();
  }

  toggleEdit(item: any): void {
    this.editCertEvent.emit(item);
  }

  toggleNew(): void {
    this.newCertEvent.emit();
  }

  toggleRemoveHandled(item: any): void {
    this.toastr
      .show( 'Está seguro que desea eliminar el certificado ' + item.nombre +
       '\nToda la configuración creada se perderá', '¿Eliminar Certificado?', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        // Aca se hace el camino feliz
        this.deleteCertEvent.emit(item);
      });
  }

  search(filterList): void {
    this.showList = filterList;
  }
}
