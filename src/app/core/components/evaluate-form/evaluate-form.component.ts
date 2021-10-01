import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evaluate-form',
  templateUrl: './evaluate-form.component.html',
  styleUrls: ['./evaluate-form.component.css']
})
export class EvaluateFormComponent implements OnInit {

  @Input() evaluation = [
    {
      idPregunta: 1,
      pregunta: 'Esta es la primera pregunta',
      puntaje: 0
    },
    {
      idPregunta: 2,
      pregunta: 'Esta es la segunda pregunta',
      puntaje: 0
    }
  ];
  @Input() selectedPaper = { pdf: 'Link de descarga del pdf' };

  
  @Output() evaluationEmitter = new EventEmitter();
  @Output() cancelEvaluation = new EventEmitter();

  formEvaluation: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  cancel(): void {
    if (confirm('¿Esta seguro desea cancelar la evaluación del paper? ' +
    '\nToda los cambios no guardados se perderán.')) {
      this.cancelEvaluation.emit();
    }
    
  }

  submit(): void {
    this.evaluationEmitter.emit(this.evaluation);
  }

}
