import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  deleteEvName: string;
  messageHeader: string;
  messageBody: string;

  evaluatorsList = [];
  usersList: IUserComplete[];

  constructor( private evaluatorService: EvaluatorService,
               private userService: UserService,
               private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formEvaluator = this.formBuilder.group({
      correo: ['', [Validators.required]]});
    this.fillEvaluatorsList();
    this.getUsers();
  }

  sendMail(): void {
    this.submitted = true;
    if (this.formEvaluator.valid) {
      const correo = this.formEvaluator.controls.correo.value;
      const user = this.searchByEmail(correo);
      if (user == null) {
        this.showMessage('Error', 'El correo ingresado no pertenece a un usuario registrado.');
        return;
      }
      const idUsuarios = [user.id.toString()];
      this.evaluatorService.postEvaluator(idUsuarios).subscribe((res: any) => {
        if (res.data != null) {
          this.showMessage('¡Correo enviado!', res.data);
          this.submitted = false;
          this.toggleNew();
        } else {
          this.showMessage('Error', res.error);
        }
      });
    }
  }

  fillEvaluatorsList(): void {
    this.evaluatorService.getEvaluators(0).subscribe((res: any) => {
      this.evaluatorsList = res.data;
    });
  }

  showMessage(header: string, body: string): void {
    this.messageHeader = header;
    this.messageBody = body;
    const btn = document.getElementById('modalCorreo');
    btn.click();
  }

  searchByEmail(email: string): IUserComplete {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.usersList.length; index++) {
      if (email === this.usersList[index].email) {
        return this.usersList[index];
      }
    }
    return null;
  }

  getUsers(){
    this.userService.getAllUsers().subscribe((res: any) => {
      this.usersList = res;
    });
  }

  deleteEvaluator() {
    this.evaluatorsList.splice(this.index, 1);
  }

  setDeleteEvaluator(i: number) {
    this.index = i;
    this.deleteEvName = this.evaluatorsList[i].nombre;
  }

  toggleNew() {
    this.submitted = false;
    this.new = !this.new;
  }
}
