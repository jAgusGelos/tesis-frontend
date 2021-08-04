import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.css']
})
export class EvaluatorComponent implements OnInit {

  evaluatorList = [
    { id: '123', nombre: 'Evaluador Nº1', puntuacion: '4.3' },
    { id: '124', nombre: 'Evaluador Nº 2', puntuacion: '7.5' }];


  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


  toggleNew(): void {
  }

  toggleRemoveHandled(item: any): void {
    if (confirm('Esta seguro desea eliminar el Evaluador: ' + item.nombre +
      '\nToda la configuración creada se perderá')) {

    }

  }

}
