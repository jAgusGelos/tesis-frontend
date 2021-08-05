import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvaluatorService } from 'src/app/core/services/evaluator.service';

@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.css'],
})
export class EvaluatorComponent implements OnInit {
  evaluatorList = [
    { id: '123', nombre: 'Evaluador Nº1', puntuacion: '4.3' },
    { id: '124', nombre: 'Evaluador Nº 2', puntuacion: '7.5' },
  ];
  adding = false;
  formEvaluator: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private evaluatorService: EvaluatorService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleNew(): void {
    this.adding = true;
    this.formEvaluator = this.formBuilder.group({
      evaluador: ['', [Validators.email]],
    });
  }

  addEvaluator(): void {
    if (this.formEvaluator.controls.evaluador.errors?.email) {
      alert('Mail Inválido');
      return;
    }
    const mail = this.formEvaluator.controls.evaluador.value;
    /* this.evaluatorService.postEvaluator(mail).subscribe((res: any) => {
      const autor = res.data;
      this.evaluatorList.push(autor)
    }); */
    const autor = { id: '00', nombre: 'Prueba', puntuacion: '10' };
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
    }
  }
}
