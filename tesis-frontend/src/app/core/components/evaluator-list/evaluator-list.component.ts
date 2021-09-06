import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEvaluator } from '../../models/iEvaluator';
import { IUser } from '../../models/IUser';
import { EvaluatorService } from '../../services/evaluator.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-evaluator-list',
  templateUrl: './evaluator-list.component.html',
  styleUrls: ['./evaluator-list.component.css']
})
export class EvaluatorListComponent implements OnInit {

  formEvaluator: FormGroup;
  submitted = false;
  new = false;
  index: number;
  deleteEvName: String;
  modalCorreo = false;
  message: String;

  rows: [{idUsuario: string, nombre: string, email: string}]

  evaluatorsList: [{
    idUsuario: string,
    nombre: string
  }];

  constructor( private evaluatorService: EvaluatorService,
               private userService: UserService,
               private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fillEvaluatorsList();
    this.formEvaluator = this.formBuilder.group({
      correo: ['', [Validators.required]]});
  }

  addEvaluator() {
    let message = '';
    let ev = [this.formEvaluator.controls.correo.value];
    this.submitted = true;
    if (this.formEvaluator.valid) {
      this.evaluatorService.postEvaluator(ev).subscribe((res: any) => {
        if (res.data != null) {
          message = res.data;
          this.submitted = false;
          this.toggleNew();
          this.modalCorreo = true;
        } else {
          message = res.error;
        this.modalCorreo = true;}
      });  
    }
  }

  fillEvaluatorsList() {
    this.evaluatorService.getEvaluators().subscribe((res: any) => {
      this.evaluatorsList = res.data;
    });
  }

  fillRows() {

  }

  deleteEvaluator() {
    this.rows.splice(this.index, 1);
  }

  setDeleteEvaluator(i: number) {
    this.index = i;
    this.deleteEvName = this.rows[i].nombre;
  }

  toggleNew() {
    this.submitted = false;
    this.new = !this.new;
  }

  /* toast() {
    var toastTrigger = document.getElementById('liveToastBtn')
      var toastLiveExample = document.getElementById('liveToast')
      if (toastTrigger) {
        toastTrigger.addEventListener('click', function () {
          var toast = new bootstrap.Toast(toastLiveExample)
      
          toast.show()
        })
      }
  } */

}
