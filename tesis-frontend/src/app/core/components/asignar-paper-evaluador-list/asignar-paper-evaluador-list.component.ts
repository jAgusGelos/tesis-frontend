import { Component, OnInit, Input } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { EvaluatorService } from '../../services/evaluator.service';

@Component({
  selector: 'app-asignar-paper-evaluador-list',
  templateUrl: './asignar-paper-evaluador-list.component.html',
  styleUrls: ['./asignar-paper-evaluador-list.component.css']
})
export class AsignarPaperEvaluadorListComponent implements OnInit {

  paperList: any[];
  evaluatorList = [];
  idEval = 0;
  assignedPaperList = [];
  showAssignedPaperList = [];
  nombreArticulo = 'nombreArticulo';

  constructor(  private evaluatorService: EvaluatorService,
                private articulosService: ArticulosService,

                ) { }

  ngOnInit(): void {
    this.getPaperList();
    this.getEvaluators();
  }

  getPaperList(): void {
    // devuelve la lista de papers asignados.  getArticulosEvaluadoresCompleto
    this.articulosService.getPaperEvaluators().subscribe((res: any) => {
      this.paperList = res.data.filter((x: any) => x.estadoArticuloNombre === 'Enviado');
      this.assignedPaperList = this.paperList.map((x: any) => {
        return {
          idEval1: x.evaluadores[0].id,
          idEval2: x.evaluadores[1].id,
          idEval3: x.evaluadores[2].id,
          idArticulo: x.idArticulo,
          nombreArticulo : x.nombreArticulo
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
        if (x.idEval2 !== +value && x.idEval3 !== +value  ) {
          x.idEval1 = +value;
        } else {
          alert('Evaluador ya asignado en este mismo paper');
          item.idEval1 = null;
        }
      }
      return x;
    });
  }

  selectOption2(value: any, item: any): void {
    this.assignedPaperList = this.assignedPaperList.map((x: any) => {
      if (item.idArticulo === x.idArticulo) {
        if (x.idEval1 !== +value && x.idEval3 !== +value  ) {
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
        if (x.idEval2 !== +value && x.idEval1 !== +value  ) {
          x.idEval3 = +value;
        } else {
          alert('Evaluador ya asignado en este mismo paper');
          item.idEval3 = null;
        }
      }
      return x;
      });
  }

  distributeEvaluators(): void {
    this.assignedPaperList = this.assignedPaperList.map((x: any) => {
      if (x.idEval1 === undefined) {
        let eval1 = this.evaluatorList[Math.floor(Math.random() * this.evaluatorList.length)].idEvaluador;
        while (eval1 === x.idEval2 || eval1 === x.idEval3) {
          eval1 = this.evaluatorList[Math.floor(Math.random() * this.evaluatorList.length)].idEvaluador;
        }
        x.idEval1 = eval1;
      }
      if (x.idEval2 === undefined) {
       let eval2 = this.evaluatorList[Math.floor(Math.random() * this.evaluatorList.length)].idEvaluador;
       while (eval2 === x.idEval1 || eval2 === x.idEval3) {
        eval2 = this.evaluatorList[Math.floor(Math.random() * this.evaluatorList.length)].idEvaluador;
       }
       x.idEval2 = eval2;
      }
      if (x.idEval3 === undefined) {
        let eval3 = this.evaluatorList[Math.floor(Math.random() * this.evaluatorList.length)].idEvaluador;
        while (eval3 === x.idEval1 || eval3 === x.idEval2) {
          eval3 = this.evaluatorList[Math.floor(Math.random() * this.evaluatorList.length)].idEvaluador;
        }
        x.idEval3 = eval3;
      }
      return x;
    });
  }

  post(): void {


    const list = this.assignedPaperList.filter((item: any) => {
      if (!(item.idEval1 === undefined || item.idEval2 === undefined || item.idEval3 === undefined)) {
        return item;
      }
    });
    // Carga masiva de Evaluadores. Post confirmación. asignarArticuloEvaluadorMasivo
    if (confirm('¿Está seguro que desea asignar las evaluaciones?')) {
      this.evaluatorService.postEvaluatorMassive(list).subscribe((res: any) => {
        alert('Los Evaluadores han sido cargado con éxito. Les llegará un mail de notificación');
      });
    }
  }

  search(filterList): void {
    this.showAssignedPaperList = filterList;
  }

}
