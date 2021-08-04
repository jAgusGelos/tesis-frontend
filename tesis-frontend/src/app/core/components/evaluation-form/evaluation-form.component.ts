import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEvaluation } from '../../models/IEvaluation';
import { ISymposium } from '../../models/ISymposium';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {

  @Input() evaluation: IEvaluation = {
    id: '',
    pregunta: '',
    simposio: '',
  };
  @Output() evaluationEmitter = new EventEmitter();
  @Output() cancelCongress = new EventEmitter();
  // @Input() simposios: ISymposium[];
  simposios = ['Simposio 1', 'Simposio 2'];
  formEvaluation: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formEvaluation = this.formBuilder.group({
      pregunta: [this.evaluation.pregunta, Validators.required],
      simposio: [this.evaluation.simposio, Validators.required],
    });

  }

  cancel(): void {
    this.cancelCongress.emit();
  }

  submit(): void {
    this.submitted = true;
    if (this.formEvaluation.invalid) {
      alert('Por favor complete todos los datos.');
      return;
    }
    this.evaluation = {
    id: this.evaluation.id,
    pregunta: this.formEvaluation.controls.pregunta.value,
    simposio: this.formEvaluation.controls.simposio.value,
    };
    this.evaluationEmitter.emit(this.evaluation);

  }

}
