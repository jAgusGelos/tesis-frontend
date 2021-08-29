import { Component, Input, OnInit } from '@angular/core';
import { IEvaluator } from '../../models/ievaluator';
import { IPaper } from '../../models/IPaper';
import { ArticulosService } from '../../services/articulos.service';
import { EvaluatorService } from '../../services/evaluator.service';

@Component({
  selector: 'app-evaluate-papers-chair-sec-card',
  templateUrl: './evaluate-papers-chair-sec-card.component.html',
  styleUrls: ['./evaluate-papers-chair-sec-card.component.css']
})
export class EvaluatePapersChairSecCardComponent implements OnInit {

  @Input() articulo: IPaper;
  @Input() evaluadores: IEvaluator[];
  edit: Boolean = false;

  constructor(private articulosService: ArticulosService) { }
  
  ngOnInit(): void {
  }

  getEvaluators(id: String) {
    //this.articulosService.getEvaluatorsByPaper()
  }

  toggleEdit() {
    this.edit = !this.edit;
  }



}
