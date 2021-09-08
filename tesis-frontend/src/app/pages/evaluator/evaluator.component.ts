import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEvaluator } from 'src/app/core/models/IEvaluator';
import { EvaluatorService } from 'src/app/core/services/evaluator.service';

@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.css'],
})
export class EvaluatorComponent implements OnInit {
  evaluatorList = [];
  evaluatorSelectedList =  [];
  adding = false;
  formEvaluator: FormGroup;

  constructor(
    private evaluatorService: EvaluatorService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getEvaluators();
  }

  getEvaluators(): void {
    this.evaluatorService.getEvaluators().subscribe((res: any) => {
      this.evaluatorList = res.data;
    });
  }

  getevaluatorSelected(): void {
    this.evaluatorService.getEvaluatorsGroup().subscribe((res: any) => {
      this.evaluatorSelectedList = res.data;
    });
  }



  toggleNew(): void {
    this.adding = !this.adding;
  }

  addEvaluator(item): void {

    this.evaluatorService.postEvaluator(item).subscribe((res: any) => {
      this.evaluatorList.push(item);
    });
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
