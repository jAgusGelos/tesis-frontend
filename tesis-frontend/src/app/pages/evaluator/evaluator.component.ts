import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEvaluator } from 'src/app/core/models/iEvaluator';
import { EvaluatorService } from 'src/app/core/services/evaluator.service';

@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.css'],
})
export class EvaluatorComponent implements OnInit {
  evaluatorList = [];
  evaluatorSelectedList =  [
    { id: '123', nombre: 'Evaluador Nº1', calificacion: '10' },
    { id: '124', nombre: 'Evaluador Nº 2', calificacion: '10' }]
  adding = false;
  formEvaluator: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private evaluatorService: EvaluatorService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getEvaluators();
  }

  getEvaluators(): void {
    this.evaluatorService.getEvaluators(0).subscribe((res: any) => {
      this.evaluatorList = res.data;
    });
  }

  toggleAddHandled(item: any): void {

  }

  toggleNew(): void {
    this.adding = !this.adding;
  }

  addEvaluator(): void {
    // const mail = this.formEvaluator.controls.evaluador.value;
    // this.evaluatorService.postEvaluator(mail).subscribe((res: any) => {
    //   const autor = res.data;
    //   this.evaluatorList.push(autor)
    // });
    const autor = { id: '00', nombre: 'Prueba',  calificacion: '10' };
    this.evaluatorList.push(autor);
  }

  toggleRemoveHandled(item: any): void {
    if (
      confirm(
        'Esta seguro desea eliminar el Evaluador: ' +
        item.nombre +
        '\nToda la configuración creada se perderá'
      )
    ) {
      // this.evaluatorService.deleteEvaluator(item).subscribe((res: any) => {
      //   this.evaluatorList = this.evaluatorList.filter((x: IEvaluator) => {
      //     if (x.id !== item.id) {
      //       return item;
      //     }
      //   });
      this.evaluatorList = this.evaluatorList.filter((x: any) => {
        if (x.id !== item.id) {
          return item;
        }
      });

    }
  }
}
