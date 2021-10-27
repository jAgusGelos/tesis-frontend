import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticulosService } from '../../services/articulos.service';
import { EvaluatorService } from '../../services/evaluator.service';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

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
  loading = false;

  constructor(  private evaluatorService: EvaluatorService,
                private articulosService: ArticulosService,
                private toastr: ToastrService,
                private router: Router

                ) { }

  ngOnInit(): void {
    this.getPaperList();
    this.getEvaluators();
  }

  getPaperList(): void {
    // devuelve la lista de papers asignados.  getArticulosEvaluadoresCompleto
    this.articulosService.getPaperEvaluators().subscribe((res: any) => {
      this.paperList = res.data.filter((x: any) => x.estadoArticuloNombre !== 'Creado');
      this.assignedPaperList = this.paperList.filter((x: any) => {
        console.log(x.evaluadores[0].nombre === undefined);

        if (x.evaluadores[0].nombre === undefined)
        {
          return {
            idEval1: x.evaluadores[0].id,
            idEval2: x.evaluadores[1].id,
            idEval3: x.evaluadores[2].id,
            idArticulo: x.idArticulo,
            nombreArticulo : x.nombreArticulo
          };
        }
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
      } else if (!(item.idEval1 === undefined && item.idEval2 === undefined && item.idEval3 === undefined)) {
        alert(`El articulo ${item.nombreArticulo} no contiene los 3 evaluadores. No será cargado hasta que la carga sea completa` );
      }
    });
    // Carga masiva de Evaluadores. Post confirmación. asignarArticuloEvaluadorMasivo
    /* {
      idEvaluadores: [1,2,3],
      articulo: 1,
      idCongreso: 1
    } */
    this.loading = true;
    this.toastr
      .show( '¿Está seguro que desea asignar las evaluaciones?', '¿Confirmar asignaciones?', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        // Aca se hace el camino feliz
        this.loading = true;
        this.evaluatorService.postEvaluatorMassive(this.assignedPaperList).subscribe((res: any) => {
          this.toastr.success('Los Evaluadores han sido cargado con éxito. Les llegará un mail de notificación');
          this.loading = false;
          this.router.navigateByUrl('/asignarPaperEvaluador');
        });
      });
    setTimeout(() => { this.loading = false; } , 3000);

  }

  search(filterList): void {
    this.showAssignedPaperList = filterList;
  }

}
