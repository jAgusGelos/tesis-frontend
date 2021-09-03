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

  evaluadores: IEvaluator[];
  evUno: IEvaluator;
  evDos: IEvaluator;
  evTres: IEvaluator;
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
      this.articulo.archivo = res.data;
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
      alert('Seleccione una evaluación para este artículo');
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
    this.evUno = this.evaluadores[0];
    this.evDos = this.evaluadores[1];
    this.evTres = this.evaluadores[2];
  }

  verDetalle() {
    let art = {
      articulo: this.articulo,
      evUno: this.evUno,
      evDos: this.evDos,
      evTres: this.evTres
    }
    this.verDetalleEmitter.emit(art);
  }

  toggleEdit() {
    this.edit = !this.edit;
  }
}
