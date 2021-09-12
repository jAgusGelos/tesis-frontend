import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvaluator } from '../../models/ievaluator';
import { IntPaper } from '../../models/IntPaper';
import { ArticulosService } from '../../services/articulos.service';
import { PaperService } from '../../services/paper.service';

@Component({
  selector: 'app-evaluate-papers-chair-sec-card',
  templateUrl: './evaluate-papers-chair-sec-card.component.html',
  styleUrls: ['./evaluate-papers-chair-sec-card.component.css']
})
export class EvaluatePapersChairSecCardComponent implements OnInit {

  @Input() articulo: IntPaper;

  @Output() verDetalleEmitter = new EventEmitter();

  message = '';
  evaluadores: IEvaluator[] = [];
  estadoEvaluacion: String;

  edit: Boolean = false;

  constructor(private articulosService: ArticulosService,
              private papersService: PaperService) { }

  ngOnInit(): void {
      this.getEvaluators();
      this.setBadge(this.articulo.estado);
  }

  //REVISAR ESTE METODO
  downloadPaper() {
    this.papersService.getPaperFile(this.articulo).subscribe((res: any) => {
      let archivo: File = res.data;
    });
    let a = document.createElement("a");
    a.setAttribute("download", this.articulo.archivo.name);
    a.click();
    document.removeChild(a);
  }

  save() {
    let select = <HTMLSelectElement>document.getElementById('selectState');
    let opt = select.options[select.selectedIndex].value;
    if (opt == '') {
      document.getElementById("evaluation-select").className = "evaluation-select is-invalid"
      return;
    }
    let paperCalification = {
      paper: this.articulo,
      calificacion: opt
    };
    this.articulosService.calificarArticulo(paperCalification).subscribe((res: any) => {
      alert(res.data);
      this.setNewState(opt);
      this.toggleEdit();
    });
  }

  setNewState(opt: String) {
    if (opt == 'aprobar') {
      this.articulo.estado = 'Aprobado';
    }
    if (opt == 'rechazar') {
      this.articulo.estado = 'Rechazado';
    }
    if (opt == 'reentrega') {
      this.articulo.estado = 'ParaReentregar';
    }
  }

  setBadge(state: String) {
    if (state == 'Aprobado' || state == 'AprobadoReentrega') {
      document.getElementById("estado-badge").className = "badge bg-success";
      this.estadoEvaluacion = 'Aprobado';
    }
    if (state == 'Rechazado' || state == 'RechazadoReentrega') {
      document.getElementById("estado-badge").className = "badge bg-danger";
      this.estadoEvaluacion = 'Rechazado';
    }
    if (state == 'ParaReentregar') {
      document.getElementById("estado-badge").className = "badge bg-warning text-dark";
      this.estadoEvaluacion = 'Para reentrega';
    }
    if (state == 'Asignado') {
      document.getElementById("estado-badge").className = "badge bg-secondary";
      this.estadoEvaluacion = 'Faltan evaluaciones';
    }
    if (state == 'Corregido') {
      document.getElementById("estado-badge").className = "badge bg-primary";
      this.estadoEvaluacion = 'Listo para evaluar';
    }
  }

  getEvaluators() {
    this.articulosService.getEvaluatorsByPaper(this.articulo).subscribe((res: any) => {
      this.evaluadores = res.data;
    });
  }

  verDetalle() {
    let art = {
      articulo: this.articulo,
      evalaudores: this.evaluadores
    }
    this.verDetalleEmitter.emit(art);
  }

  toggleEdit() {
    this.edit = !this.edit;
  }
}
