import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICongress } from '../../models/ICongress';
import { IEvaluator } from '../../models/ievaluator';
import { IntPaper } from '../../models/IntPaper';
import { ISymposium } from '../../models/ISymposium';
import { IUserComplete } from '../../models/IUserComplete';
import { ArticulosService } from '../../services/articulos.service';
import { EvaluatorService } from '../../services/evaluator.service';
import { SymposiumService } from '../../services/symposium.service';
import { UserService } from '../../services/user.service';

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
          idEval1: x.evaluadores[0].ideval,
          idEval2: x.evaluadores[1].ideval,
          idEval3: x.evaluadores[2].ideval,
          idArticulo: x.idArticulo,
          nombreArticulo : x.nombreArticulo
        };
      });
    });
  }

  getEvaluators(): void {
    this.evaluatorService.getEvaluatorsSimposio().subscribe((res: any) => {
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
    this.assignedPaperList = this.assignedPaperList.map((x: any) => {
      if (x.idEval1 === null) {
        let eval1 = this.evaluatorList[Math.floor(Math.random() * this.evaluatorList.length)].idEvaluador;
        while (eval1 === x.idEval2 || eval1 === x.idEval3) {
          eval1 = this.evaluatorList[Math.floor(Math.random() * this.evaluatorList.length)].idEvaluador;
        }
        x.idEval1 = eval1;
      }
      if (x.idEval2 === null) {
       let eval2 = this.evaluatorList[Math.floor(Math.random() * this.evaluatorList.length)].idEvaluador;
       while (eval2 === x.idEval1 || eval2 === x.idEval3) {
        eval2 = this.evaluatorList[Math.floor(Math.random() * this.evaluatorList.length)].idEvaluador;
       }
       x.idEval2 = eval2;
      }
      if (x.idEval3 === null) {
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
