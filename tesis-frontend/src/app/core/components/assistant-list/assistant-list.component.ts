import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUserComplete } from '../../models/IUserComplete';
import { AssistantService } from '../../services/assistant.service';
import { UserService } from '../../services/user.service';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-assistant-list',
  templateUrl: './assistant-list.component.html',
  styleUrls: ['./assistant-list.component.css']
})
export class AssistantListComponent implements OnInit {

  formAssistant: FormGroup;
  submitted = false;
  new = false;
  assistantList: any[];
  usersList: IUserComplete[];
  showList = [];

  constructor(private assistantService: AssistantService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.formAssistant = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]]});
    this.fillAssistantList();
    this.getUsers();
  }

  sendMail(): void {
    this.submitted = true;
    if (this.formAssistant.invalid) {
      return;
    }
    const correo = this.formAssistant.controls.correo.value;
    const user = this.searchByEmail(correo);
    if (user == null) {
      this.toast.warning('Atención', 'El correo ingresado no pertenece a un usuario registrado.');
      return;
    }
    this.assistantService.asignarRolAyudante(user).subscribe((res: any) => {
      if (res.data != null) {
        this.toast.success('Se envió un correo a ' + correo);
        this.submitted = false;
        this.toggleNew();
      } else {
        this.toast.error('Error', res.error);
      }
    });
  }

  fillAssistantList(): void {
    this.assistantService.getAyudantes().subscribe((res: any) => {
      this.assistantList = res.data;
      this.showList = res.data;
    });
  }

  getUsers(): void{
    this.userService.getAllUsers().subscribe((res: any) => {
      this.usersList = res;
    });
  }

  deleteAssistant(item: any): void {
    this.toast.show( '¿Seguro que deseas borrar al ayudante ' + item.nombre + '?', 'Borrar Ayudante', {
      toastComponent: CustomToastComponent,
      disableTimeOut: true,
      tapToDismiss: false,
      enableHtml: true
    })
    .onAction.subscribe(() => {
      this.assistantService.deleteAyudante(item).subscribe((res: any) => {
        this.assistantList = this.assistantList.filter((x: any) => {
          if (x.idUsuario !== item.idUsuario) {
            return x;
          }
        });
        this.showList = this.assistantList.slice();
        this.toast.success('Ayudante Eliminado');
      });
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

  toggleNew(): void {
    this.submitted = false;
    this.new = !this.new;
  }

  search(filterList): void {
    this.showList = filterList;
  }
}
