import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EvaluationService } from '../../services/evaluation.service';
import { PaperService } from '../../services/paper.service';

@Component({
  selector: 'app-revision-autor',
  templateUrl: './revision-autor.component.html',
  styleUrls: ['./revision-autor.component.css']
})
export class RevisionAutorComponent implements OnInit {

  @Input() paper: any;
  @Output() cancelRevision = new EventEmitter();

  detalles = [];
  itemsEvaluacion = [];
  idEvUno = 0;
  idEvDos = 0;
  idEvTres = 0;
  puntuaciones = [{value: 0, nombre: ''},
                  {value: 1, nombre: 'Muy Débil'},
                  {value: 2, nombre: 'Débil'},
                  {value: 3, nombre: 'Aceptable'},
                  {value: 4, nombre: 'Bueno'},
                  {value: 5, nombre: 'Muy bueno'}];

  constructor( private paperService: PaperService,
               private evaluationService: EvaluationService ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.setDetalle();
  }

  setDetalle(): void {
    this.evaluationService.getItemsEvaluacion(1).subscribe((res: any) => {
      this.itemsEvaluacion = res.data;
      this.paperService.getEvaluationDetails(this.paper.id).subscribe((ans: any) => {
        const evaluaciones = ans.data;
        if (evaluaciones.length >= 1) {
          this.idEvUno = evaluaciones[0].idEvaluador;
        }
        if (evaluaciones.length >= 2) {
          this.idEvDos = evaluaciones[1].idEvaluador;
        }
        if (evaluaciones.length >= 3) {
          this.idEvTres = evaluaciones[2].idEvaluador;
        }
        let ev1;
        let ev2;
        let ev3;
        evaluaciones.forEach(e => {
          if (e.idEvaluador === this.idEvUno) {
            ev1 = e;
          }
          else if (e.idEvaluador === this.idEvDos) {
            ev2 = e;
          }
          else {
            ev3 = e;
          }
        });
        let calif1 = null;
        let calif2 = null;
        let calif3 = null;
        let rec1 = null;
        let rec2 = null;
        let rec3 = null;
        let obs1 = null;
        let obs2 = null;
        let obs3 = null;
        for (let i = 0; i < this.itemsEvaluacion.length; i++) {
          if (ev1 !== undefined) {
            if (ev1.itemsEvaluados[i] !== undefined) { calif1 = ev1.itemsEvaluados[i].calificacion; }
            else { calif1 = 0; }
          } else { calif1 = 0; }
          if (ev2 !== undefined) {
            if (ev2.itemsEvaluados[i] !== undefined) { calif2 = ev2.itemsEvaluados[i].calificacion; }
            else { calif2 = 0; }
          } else { calif2 = 0; }
          if (ev3 !== undefined) {
            if (ev3.itemsEvaluados[i] !== undefined) { calif3 = ev3.itemsEvaluados[i].calificacion; }
            else { calif3 = 0; }
          } else { calif3 = 0; }
          this.detalles.push({aspecto: this.itemsEvaluacion[i].nombre,
                              descripcion: this.itemsEvaluacion[i].descripcion,
                              res1: this.puntuaciones[calif1].nombre,
                              res2: this.puntuaciones[calif2].nombre,
                              res3: this.puntuaciones[calif3].nombre});
          calif1 = null, calif2 = null, calif3 = null;
        }
        if (ev1 !== undefined) {
          rec1 = ev1.recomendacion;
          obs1 = ev1.observacion;
        } else {
          rec1 = null;
          obs1 = null;
        }
        if (ev2 !== undefined) {
          rec2 = ev2.recomendacion;
          obs2 = ev2.observacion;
        } else {
          rec2 = null;
          obs2 = null;
        }
        if (ev3 !== undefined) {
          rec3 = ev3.recomendacion;
          obs3 = ev3.observacion;
        } else {
          rec3 = null;
          obs3 = null;
        }
        this.detalles.push({aspecto: 'Recomendación',
          descripcion: 'Recomendación final para la evaluación.',
          res1: rec1,
          res2: rec2,
          res3: rec3});
        this.detalles.push({aspecto: 'Observaciones',
          descripcion: 'Observaciones sobre el artículo.',
          res1: obs1,
          res2: obs2,
          res3: obs3});
      });
    });
  }

  getArchivo(): void {
    this.paperService.getPaperFile(this.paper.id).subscribe((res: any) => {
      const archivo: ArrayBuffer = res;
      const blob = new Blob([archivo], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  }

  cancel(): void {
    this.cancelRevision.emit();
  }
}
