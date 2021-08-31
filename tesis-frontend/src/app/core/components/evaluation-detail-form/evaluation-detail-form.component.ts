import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvaluator } from '../../models/ievaluator';
import { IPaper } from '../../models/IPaper';
import { PaperService } from '../../services/paper.service';

@Component({
  selector: 'app-evaluation-detail-form',
  templateUrl: './evaluation-detail-form.component.html',
  styleUrls: ['./evaluation-detail-form.component.css']
})
export class EvaluationDetailFormComponent implements OnInit {

  @Input() paperSeleccionado: {articulo: IPaper, evUno: IEvaluator, evDos: IEvaluator, evTres:IEvaluator};

  paper: IPaper = {id: '1', nombre:'Paper1', autores:['A',], responsable:'A', simposio:'Simposio', archivo: null, estado:'Evaluado'};
  evaluator1: IEvaluator;
  evaluator2: IEvaluator;
  evaluator3: IEvaluator;
  
  evaluationsArray = [
    ['3', ['id1', 'puntuacion Ev 3 item 1'], ['id2','puntuacion Ev 3 item 2'],['id3','puntuacion Ev 3 item 3']],
    ['1', ['id1', 'puntuacion Ev 1 item 1'], ['id2','puntuacion Ev 1 item 2'],['id3','puntuacion Ev 1 item 3']],
    ['2', ['id2', 'puntuacion Ev 2 item 1'], ['id1','puntuacion Ev 2 item 2'],['id3','puntuacion Ev 2 item 3']]];

  evDetailRow = [
    {pregunta: 'Pregunta 1', res1: 'Respuesta 1', res2: 'Respuesta 2', res3: 'Respuesta 3',},
    {pregunta: 'Pregunta 2', res1: 'Respuesta 1', res2: 'Respuesta 2', res3: 'Respuesta 3',}];

    
  evaux1;
  evaux2;
  evaux3;
  preguntas = [{id: '1', pregunta: 'A'}, {id: '2', pregunta: 'B'}, {id:'3', pregunta: 'C'}]

  @Output() goBackEvent = new EventEmitter();

  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
    this.paper = this.paperSeleccionado.articulo;
    this.getPreguntas(this.paper);
    this.evaluator1 = this.paperSeleccionado.evUno;
    this.evaluator2 = this.paperSeleccionado.evDos;
    this.evaluator3 = this.paperSeleccionado.evTres;
    this.getEvaluationDetails(this.paper);
  }

  goBack(): void {
    this.goBackEvent.emit();
  }

  getEvaluationDetails(paper: IPaper) {
    this.paperService.getEvaluationDetails(paper.id).subscribe((res: any) => {
      this.evaluationsArray = res.data;
    }
    );
    this.aux();
  }

  getPreguntas(paper: IPaper){
    this.paperService.getQuestions(paper.id).subscribe((res: any) => {
      this.preguntas = res.data;
    });
  }

  aux(){
    /* Para corresponder el evaluador con la columna sin importar el orden...*/
    this.evaluationsArray.forEach(element => {
      if(element[0][0] == this.evaluator1.id) {this.evaux1 = element}
      else if(element[0][0] == this.evaluator2.id){this.evaux2 = element}
      else {this.evaux3 = element}
    });

    for (let index = 1; index < this.evaux1.length; index++) {
    const element1 = this.evaux1[index][1];
    const element2 = this.evaux2[index][1];
    const element3 = this.evaux3[index][1];
    
    this.evDetailRow.push({pregunta: this.preguntas[index-1].pregunta, res1: element1, res2: element2, res3: element3})
    }
  }
}
