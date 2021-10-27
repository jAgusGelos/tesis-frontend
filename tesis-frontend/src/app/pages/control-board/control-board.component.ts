import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/core/services/articulos.service';
import { CongressService } from 'src/app/core/services/congress.service';
import { EvaluatorService } from 'src/app/core/services/evaluator.service';

@Component({
  selector: 'app-control-board',
  templateUrl: './control-board.component.html',
  styleUrls: ['./control-board.component.css']
})
export class ControlBoardComponent implements OnInit {

  // Revisar Eliminación y reasignación de evaluador. No está funcionando

  paperList: any[];
  evaluatorList = [];
  idEval = 0;
  assignedPaperList = [];
  showAssignedPaperList = [];
  nombreArticulo = 'nombreArticulo';
  fechaFinEv: '';
  fechaFinProrroga: '';
  restFechaFinEv = 0;
  restFechaFinProroga = 0;


  constructor(private evaluatorService: EvaluatorService,
              private articulosService: ArticulosService,
              private congressService: CongressService

  ) { }

  ngOnInit(): void {
    this.getPaperList();
    this.getEvaluators();
    this.getCongress();
  }

  getCongress(): void {
    this.congressService.getCongressById().subscribe((res: any) => {
      this.fechaFinEv = res.data[0].fechaFinEvaluacion.split(' ')[0];
      this.fechaFinProrroga = res.data[0].fechaFinReEv.split(' ')[0];

      const oneDay = 24 * 60 * 60 * 1000;
      const today = new Date();
      const fechaF = res.data[0].fechaFinEvaluacion.split(' ')[0].split('/');
      const fechaP = res.data[0].fechaFinReEv.split(' ')[0].split('/');

      const fechaFin = new Date(fechaF[2], fechaF[1] - 1, fechaF[0]);
      const fechaPR = new Date(fechaP[2], fechaP[1] - 1, fechaP[0]);

      this.restFechaFinEv = Math.round(Math.abs((fechaFin.valueOf() - today.valueOf()) / oneDay));
      this.restFechaFinProroga = Math.round(Math.abs((fechaPR.valueOf() - today.valueOf()) / oneDay));
    });
  }

  getPaperList(): void {
    // devuelve la lista de papers asignados.  getArticulosEvaluadoresCompleto
    this.articulosService.getPaperEvaluators().subscribe((res: any) => {
      this.paperList = res.data.filter((x: any) => (x.estadoArticuloNombre === 'Sin Evaluar' || x.estadoArticuloNombre === 'Enviado'));
      this.assignedPaperList = this.paperList.map((x: any) => {
        return {
          idEval1: x.evaluadores[0].id,
          idEval2: x.evaluadores[1].id,
          idEval3: x.evaluadores[2].id,
          idArticulo: x.idArticulo,
          nombreArticulo: x.nombreArticulo,
          nomEval: x.evaluadores
        };
      });
      this.showAssignedPaperList = this.assignedPaperList.slice();
    });
  }

  getEvaluators(): void {
    this.evaluatorService.getEvaluatorsGroup().subscribe((res: any) => {
      this.evaluatorList = res.data;
    });
  }

  selectOption1(value: any, item: any): void {
    this.assignedPaperList = this.assignedPaperList.map((x: any) => {
      if (item.idArticulo === x.idArticulo) {
        if (x.idEval2 !== +value && x.idEval3 !== +value) {
          x.idEval1 = +value;
        } else {
          alert('Evaluador ya asignado en este mismo paper');
          item.idEval1 = null;
        }
      }
      return x;
    });

    // Falta hacer el post con el nuevo evaluador
  }

  selectOption2(value: any, item: any): void {
    this.assignedPaperList = this.assignedPaperList.map((x: any) => {
      if (item.idArticulo === x.idArticulo) {
        if (x.idEval1 !== +value && x.idEval3 !== +value) {
          x.idEval2 = +value;
        } else {
          alert('Evaluador ya asignado en este mismo paper');
          item.idEval2 = null;
        }
      }
      return x;
    });
  }

  selectOption3(value: any, item: any): void {
    this.assignedPaperList = this.assignedPaperList.map((x: any) => {
      if (item.idArticulo === x.idArticulo) {
        if (x.idEval2 !== +value && x.idEval1 !== +value) {
          x.idEval3 = +value;
        } else {
          alert('Evaluador ya asignado en este mismo paper');
          item.idEval3 = null;
        }
      }
      return x;
    });
  }

  search(filterList): void {
    this.showAssignedPaperList = filterList;
  }

  eliminarYAsignar(art: any, ev: any): void {
    // Llamar al service para hacer la desvinculación
    this.assignedPaperList = this.assignedPaperList.map((item: any) => {
      if (item.idArticulo === art.idArticulo) {
        if (item.idEval1 === ev.id) {
          item.idEval1 = null;
        } else if (item.idEval2 === ev.id) {
          item.idEval2 = null;
        } else {
          item.idEval3 = null;
        }
      }
      return item;
    });
    this.showAssignedPaperList = this.assignedPaperList.slice();
  }

}
