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
        x.idEval1 = +value;
      }
      return x;
    });
  }
  selectOption2(value: any, item: any): void {
    this.assignedPaperList = this.assignedPaperList.map((x: any) => {
      if (item.idArticulo === x.idArticulo) {
        x.idEval2 = +value;
      }
      return x;
    });
  }

  selectOption3(value: any, item: any): void {
    this.assignedPaperList = this.assignedPaperList.map((x: any) => {
      if (item.idArticulo === x.idArticulo) {
        x.idEval3 = +value;
      }
      return x;
      });
  }

  distributeEvaluators(): void {
    // Distribuye aleatoriamente los evaluadores a los papers cargados.
    console.log('Paso');

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
    console.log(this.assignedPaperList);
    // Carga masiva de Evaluadores. Post confirmación. asignarArticuloEvaluadorMasivo
    /* {
      idEvaluadores: [1,2,3],
      articulo: 1,
      idCongreso: 1
    } */
    if (confirm('¿Está seguro que desea asignar las evaluaciones?')) {
      this.evaluatorService.postEvaluatorMassive(this.assignedPaperList).subscribe((res: any) => {
        alert('Los Evaluadores han sido cargado con éxito. Les llegará un mail de notificación');
      });
    }
  }

}