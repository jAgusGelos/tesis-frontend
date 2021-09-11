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
  assignedPapersList: [];

  constructor(  private evaluatorService: EvaluatorService,
                private articulosService: ArticulosService,
                ) { }

  ngOnInit(): void {
    this.getPaperList();
  }

  getPaperList(): void {
    // devuelve la lista de papers asignados.  getArticulosEvaluadoresCompleto
  }

  getEvaluators(): void {
    // get Pool de evaluadores. Solicitar los evaluadores a distribuir
  }

  distributeEvaluators(): void {
    // Distribuye aleatoriamente los evaluadores a los papers cargados.
  }

  massivePost(): void {
    // Carga masiva de Evaluadores. Post confirmación. asignarArticuloEvaluadorMasivo
    /* {
      idEvaluadores: [1,2,3],
      articulo: 1,
      idCongreso: 1
    } */
  }

}
