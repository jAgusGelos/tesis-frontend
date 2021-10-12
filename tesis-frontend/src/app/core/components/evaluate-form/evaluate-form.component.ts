import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IEvaluation } from '../../models/IEvaluation';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

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

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  cancel(): void {
    this.toastr
      .show( '¿Está seguro que desea cancelar la evaluación del paper?' + '\nToda los cambios no guardados se perderán.', '¿Cancelar evaluación?', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        // Aca se hace el camino feliz
        this.cancelEvaluation.emit();
      });   
  }

  submit(): void {
    this.evaluationEmitter.emit(this.evaluation);
  }

}
