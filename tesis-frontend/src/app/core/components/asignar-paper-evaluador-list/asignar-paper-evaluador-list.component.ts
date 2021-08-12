import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICongress } from '../../models/ICongress';
import { IEvaluator } from '../../models/ievaluator';
import { IPaper } from '../../models/ipaper';
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

  formPapersEvaluators: FormGroup;

  @Input() congress: ICongress;

  symposium: ISymposium;

  @Input() assignedPaper: {
    articulo: IPaper;
    evaUno: IEvaluator;
    evaDos: IEvaluator;
    evaTres: IEvaluator;
  }

  papersList: IPaper[];
  evaluatorsList: IEvaluator[];

  assignedPapersList: [{
    articulo: IPaper;
    evaUno: IEvaluator;
    evaDos: IEvaluator;
    evaTres: IEvaluator;
  }];

  constructor(  private formBuilder: FormBuilder,
                private evaluatorService: EvaluatorService,
                private articulosService: ArticulosService,
                private userService: UserService,
                private symposiumService: SymposiumService) { }

  ngOnInit(): void {
    this.formPapersEvaluators = this.formBuilder.group({
      articulo: [this.assignedPaper.articulo.id],
      evaUno: [this.assignedPaper.evaUno.id, [Validators.required]],
      evaDos: [this.assignedPaper.evaDos.id, [Validators.required]],
      evaTres: [this.assignedPaper.evaTres.id, [Validators.required]]
    })
    this.getSymposiumsByChair();
    this.getPapersBySymposium();   
    this.fillAssignedPapersList();
    this.getEvaluators();
  }

  post(row: any, evNum: Number, paper: IPaper, evaluator: IEvaluator) {
    let asignation = {
      congress: this.congress,
      paper,
      evaluator
    }
    this.articulosService.post(asignation).subscribe((res: any) => {
      alert('Evaluador asignado con éxito.');
      let index = this.assignedPapersList.indexOf(row);
      row = this.addToRow(row, evNum, evaluator);
      this.assignedPapersList.splice(index, 1, row);
    });
  }

  delete(row: any, paper: IPaper, evaluator: IEvaluator) {
    let asignation = {
      congress: this.congress,
      paper,
      evaluator
    }
    this.articulosService.delete(asignation).subscribe((res: any) => {
      alert('El evaluador ya no está asignado al artículo.');
      let index = this.assignedPapersList.indexOf(row);
      row = this.eliminateFromRow(row, evaluator);
      this.assignedPapersList.splice(index, 1, row);
    });
  }

  addToRow(row: any, evNum: Number, evaluator: IEvaluator) {
    if (evNum == 1) {
      row.evaUno = evaluator;
      return row;
    } else if (evNum == 2) {
      row.evaDos = evaluator;
      return row;
    } else if (evNum == 3) {
      row.evaTres = evaluator;
      return row;
    }

  }

  eliminateFromRow(row: any, evaluator: IEvaluator) {
    if (row.evaUno === evaluator) {
      row.evaUno = null;
      return row;
    } else if (row.evaDos === evaluator) {
      row.evaDos = null;
      return row;
    } else if (row.evaTres === evaluator) {
      row.evaTres = null;
      return row;
    }
  }

  isAssigned(evaluator: IEvaluator){
    if (evaluator !== null) {
      return true;
    }
    return false;
  }

  getEvaluators() {
    this.evaluatorService.getEvaluators().subscribe((res: any) => {
        this.evaluatorsList = res.data;
    });
  }

  fillAssignedPapersList() {
    let row: {
      articulo: IPaper,
      evaUno: IEvaluator,
      evaDos: IEvaluator,
      evaTres: IEvaluator
    }
    let evaluators: IEvaluator[];
    for (let index = 0; index < this.papersList.length; index++) {
      row.articulo = this.papersList[index];
      evaluators = this.getEvaluatorsByPaper(row.articulo);
      if (evaluators.length >= 0) {
        row.evaUno = evaluators[0];
        if (evaluators.length >= 1) {
          row.evaDos = evaluators[1];
          if (evaluators.length >= 2) {
            row.evaTres = evaluators[2];
          }
          else {
            row.evaTres = null;
          }
        } else {
          row.evaDos = null;
        }
        
      } else {
        row.evaUno = null;
      }
    }
    this.assignedPapersList.push(row);
    row.articulo = null;
    row.evaUno = null;
    row.evaDos = null;
    row.evaTres = null;
  }

  getEvaluatorsByPaper(paper: IPaper): IEvaluator[] {
    if (paper !== null) {
      let evaluators: IEvaluator[];
      this.articulosService.getEvaluatorsByPaper(paper).subscribe((res: any) => {
        evaluators = res.data;
      });
      return evaluators;
    }
  }

  getPapersBySymposium() {
    if (this.symposium !== null) {
      this.articulosService.getPapersBySymposium(this.symposium).subscribe((res: any) => {
        this.papersList = res.data;
      });
    }
  }

  getSymposiumsByChair(){
    let loggedChair: IUserComplete;
    this.userService.getLoggedUser().subscribe((res: any) => {
      loggedChair = res.data;
    });
    this.symposiumService.getSymposiumByChair(loggedChair).subscribe((res: any) => {
      this.symposium = res.data;
    });
  }
}
