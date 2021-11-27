import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUserComplete } from '../../models/IUserComplete';
import { EvaluatorService } from '../../services/evaluator.service';
import { UserService } from '../../services/user.service';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-evaluator-list',
  templateUrl: './evaluator-list.component.html',
  styleUrls: ['./evaluator-list.component.css']
})
export class EvaluatorListComponent implements OnInit {

  formEvaluator: FormGroup;
  submitted = false;
  new = false;
  evaluatorsList = [];
  usersList: IUserComplete[];
  showList = [];

  constructor( private evaluatorService: EvaluatorService,
               private userService: UserService,
               private formBuilder: FormBuilder,
               private toast: ToastrService) { }

  ngOnInit(): void {
    this.formEvaluator = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]]});
    this.fillEvaluatorsList();
    this.getUsers();
  }

  sendMail(): void {
    this.submitted = true;
    if (this.formEvaluator.invalid) {
      return;
    }
    const correo = this.formEvaluator.controls.correo.value;
    const user = this.searchByEmail(correo);
    if (user == null) {
      this.toast.warning('Atención', 'El correo ingresado no pertenece a un usuario registrado.');
      return;
    }
    const idUsuarios = user.id.toString();
    this.evaluatorService.postEvaluator(idUsuarios.toString()).subscribe((res: any) => {
      if (res.data != null) {
        this.toast.success('Se envió un correo a ' + correo);
        this.submitted = false;
        this.toggleNew();
      } else {
        this.toast.error('Error', res.error);
      }
    });
  }

  fillEvaluatorsList(): void {
    this.evaluatorService.getEvaluators(0).subscribe((res: any) => {
      this.evaluatorsList = res.data;
      this.showList = res.data;
    });
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

  getUsers(): void{
    this.userService.getAllUsers().subscribe((res: any) => {
      this.usersList = res;
    });
  }

  deleteEvaluator(ev: any): void {
    this.toast.show( '¿Seguro que deseas borrar al evaluador ' + ev.nombre + '?', 'Borrar Evaluador', {
      toastComponent: CustomToastComponent,
      disableTimeOut: true,
      tapToDismiss: false,
      enableHtml: true
    })
    .onAction.subscribe(() => {
      this.evaluatorService.deleteIdEvaluator(ev.idUsuario).subscribe((res: any) => {
        this.evaluatorsList = this.evaluatorsList.filter((x: any) => {
          if (x.idUsuario !== ev.idUsuario) {
            return x;
          }
        });
        this.showList = this.evaluatorsList.slice();
        this.toast.success('Evaluador Eliminado');
      });
    });
  }

  toggleNew(): void {
    this.submitted = false;
    this.new = !this.new;
  }

  search(filterList): void {
    this.showList = filterList;
  }

}
