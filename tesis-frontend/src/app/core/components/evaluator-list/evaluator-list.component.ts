import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEvaluator } from '../../models/iEvaluator';
import { IUserComplete } from '../../models/IUserComplete';
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

  rows = [{idUsuario: '1', nombre: 'Juan', email: 'juan@example.com'},
        {idUsuario: '2', nombre: 'Agus', email: 'agus@example.com'},
        {idUsuario: '3', nombre: 'Aye', email: 'aye@example.com'},]

  evaluatorsList: [{
    idUsuario: string,
    nombre: string
  }];

  usersList = [];

  constructor( private evaluatorService: EvaluatorService,
               private userService: UserService,
               private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getUsers();
    console.log(this.usersList);
    /* this.fillEvaluatorsList();
    this.formEvaluator = this.formBuilder.group({
      correo: ['', [Validators.required]]}); */
  }

  addEvaluator() {
    this.submitted = true;
    if (this.formEvaluator.valid) {
      let correo = this.formEvaluator.controls.correo.value;
      let user = this.searchByEmail(correo);
      let idUsuarios = [];
      idUsuarios.push(user.id);
      this.evaluatorService.postEvaluator(idUsuarios).subscribe((res: any) => {
        if (res.data != null) {
          this.message = res.data;
          this.submitted = false;
          this.toggleNew();
          this.modalCorreo = true;
        } else {
          this.message = res.error;
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

  searchByEmail(email: string) {
    for (let index = 0; index < this.usersList.length; index++) {
      if (email == this.usersList[index].email) {
        return this.usersList[index];
      }
    }
  }

  getUsers(){
    this.userService.getAllUsers().subscribe((res: any) => {
      this.usersList = res;
    });
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
}
