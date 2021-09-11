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
  evaluatorSelectedId = [];

  constructor(
    private evaluatorService: EvaluatorService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getEvaluatorSelected();
    this.getEvaluators();
  }

  getEvaluators(): void {
    this.evaluatorService.getEvaluatorsSimposio().subscribe((res: any) => {
      this.evaluatorList = res.data.filter((x: any) => {
        if (!this.evaluatorSelectedId.includes(x.idEvaluador)) {
          return x;
        }
      });
    });
  }

  getEvaluatorSelected(): void {
    this.evaluatorService.getEvaluatorsGroup().subscribe((res: any) => {
      this.evaluatorSelectedList = res.data;
      this.evaluatorSelectedId = res.data.map((x: any) => x.idEvaluador);
    });

  }

  addEvaluator(item: any): void {
    this.evaluatorService.postEvaluatorGroup(item.idEvaluador).subscribe((res: any) => {
      this.evaluatorList = this.evaluatorList.filter((x: any) => {
        if (!(x.idEvaluador === item.idEvaluador)) {
          return x;
        }
      });
      this.evaluatorSelectedList.push(item);
    });
  }

  toggleRemoveHandled(item: any): void {
    if (
      confirm(
        'Esta seguro desea eliminar el Evaluador: ' +
        item.nombreEv + ' ' + item.apellidoEv +
        '\nToda la configuración creada se perderá'
      )
    ) {
      this.evaluatorService.deleteEvaluatorGroup(item.idEvaluador).subscribe((res: any) => {
        this.evaluatorList.push(item);
        this.evaluatorSelectedList = this.evaluatorSelectedList.filter((x: any) => {
          if (x.idEvaluador !== item.idEvaluador) {
            return item;
          }
        });
    });

    }
  }
}
