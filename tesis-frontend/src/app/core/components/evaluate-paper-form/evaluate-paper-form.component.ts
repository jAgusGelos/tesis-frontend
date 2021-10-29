import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CongressRoutingModule } from 'src/app/pages/congress/congress-routing.module';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-evaluate-paper-form',
  templateUrl: './evaluate-paper-form.component.html',
  styleUrls: ['./evaluate-paper-form.component.css']
})
export class EvaluatePaperFormComponent implements OnInit {

  @Input() paper: any;
  @Input() items = [];
  @Input() evaluation: any;
  @Output() GetItemsEvent = new EventEmitter();
  @Output() GetFileEvent = new EventEmitter();
  @Output() SaveEvent = new EventEmitter();
  @Output() CancelEvent = new EventEmitter();
  evaluacion;

  puntuaciones = [{value: 1, nombre: 'Muy Débil'},
                  {value: 2, nombre: 'Débil'},
                  {value: 3, nombre: 'Aceptable'},
                  {value: 4, nombre: 'Bueno'},
                  {value: 5, nombre: 'Muy bueno'}];
  recomendaciones = [{value: 1, nombre: 'Rechazar Fuertemente'},
                     {value: 2, nombre: 'Rechazar'},
                     {value: 3, nombre: 'Rechazar Débilmente'},
                     {value: 4, nombre: 'Necesita Reentrega'},
                     {value: 5, nombre: 'Aprobar Débilmente'},
                     {value: 6, nombre: 'Aprobar'},
                     {value: 7, nombre: 'Aprobar Fuertemente'}];

  constructor( private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.evaluacion = {itemsEvaluacion: this.items,
      idRecomendacion: this.paper.recomendacion,
      observacion: this.paper.observaciones,
      observacionInterna: this.paper.observacionInterna};
    window.scrollTo(0, 0);
    this.getItems(this.paper.idArticulo);
  }

  save(submit: boolean): any {
    this.handleItems();
    const ev = {
      idArticulo: this.paper.idArticulo,
      evaluacion: this.evaluacion,
      submit
    };
    this.SaveEvent.emit(ev);
    return ev;
  }

  submit(): void {
    for (const item of this.items) {
      if (item.puntuacion == null) {
        this.toastr.warning('Todos los aspectos requieren evaluación!');
        return;
      }
    }
    if (this.evaluacion.idRecomendacion == null) {
      this.toastr.warning('Se requiere seleccionar una recomendación final!');
      return;
    }
    if (this.evaluacion.observacion === '') {
      this.toastr.warning('Se requiere escribir una observación para el autor.');
      return;
    }
    this.toastr
    .show( 'Si envía la evaluación, después no podrá editarla. Seguro desea continuar?', 'Enviar Evaluación', {
      toastComponent: CustomToastComponent,
      disableTimeOut: true,
      tapToDismiss: false,
      enableHtml: true
    })
    .onAction.subscribe(() => {
      const ev = this.save(true);
    });
  }

  handleItems(): void {
    let vector = '';
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.items.length; i++) {
      vector = vector + this.items[i].id + '-' + this.items[i].puntuacion + ',';
      if (i === this.items.length - 1) {
        vector = vector + this.items[i].id + '-' + this.items[i].puntuacion;
      }
    }
    this.evaluacion.itemsEvaluacion = vector;
  }

  setObservacionAutor(): void {
    const obs = document.getElementById('observacion-autor') as HTMLTextAreaElement;
    this.evaluacion.observacion = obs.value;
  }

  setObservacionInterna(): void {
    const obs = document.getElementById('observacion-interna') as HTMLTextAreaElement;
    this.evaluacion.observacionInterna = obs.value;
  }

  setPuntuacion(value, index): void {
    if (value === '') {
      this.items[index].puntuacion = null;
      return;
    } else {
      this.items[index].puntuacion = parseInt(value, 10);
    }
  }

  setRecomendacion(value): void {
    if (value === '') {
      this.evaluacion.idRecomendacion = null;
      return;
    } else {
      this.evaluacion.idRecomendacion = parseInt(value, 10);
    }
  }

  toast(): void {
    this.toastr
    .show( 'Esta seguro que desea borrar', 'Confirmar borrado?', {
      toastComponent: CustomToastComponent,
      disableTimeOut: true,
      tapToDismiss: false,
      enableHtml: true
    })
    .onAction.subscribe(() => {
      // Aca se hace el camino feliz
      console.log('Camino feliz');
    });
  }

  getItems(id): void {
    this.GetItemsEvent.emit(id);
  }

  getFile(id): void {
    this.GetFileEvent.emit(id);
  }

  cancel(): void {
    this.CancelEvent.emit();
  }
}
