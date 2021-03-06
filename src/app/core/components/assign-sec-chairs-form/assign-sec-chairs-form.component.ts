import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IassignSecChairTheme } from '../../models/iassign-sec-chair-theme';
import { AssignSecChairThemeService } from '../../services/assign-sec-chair-theme.service';
import { CongressService } from '../../services/congress.service';
import { PaperService } from '../../services/paper.service';
import { SymposiumService } from '../../services/symposium.service';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-assign-sec-chairs-form',
  templateUrl: './assign-sec-chairs-form.component.html',
  styleUrls: ['./assign-sec-chairs-form.component.css']
})
export class AssignSecChairsFormComponent implements OnInit {

  formAssignSecChairs: FormGroup;
  submitted = false;
  tematicas: any [];
  emptyAssign: IassignSecChairTheme[] = [];
  chairsAssigned = [];
  chairsNotAssigned = [];
  showList = [];

  constructor( private formBuilder: FormBuilder,
               private assignService: AssignSecChairThemeService,
               private paperService: PaperService,
               private toastr: ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formAssignSecChairs = this.formBuilder.group({
      selectChair: ['', [Validators.required]],
      selectTematica: ['', [Validators.required]]
    });
    this.getTematicas();
    this.getUsuarios();
    this.getChairsAsignados();
  }

  getChairsAsignados(): void {
    this.assignService.getAssignSecChairTheme().subscribe((res: any) => {
      this.chairsAssigned = res.data;
      this.showList = res.data;
    });
  }

  getUsuarios(): void {
    this.assignService.getUsuarios().subscribe((res: any) => {
      this.chairsNotAssigned = res;
    });

  }

  getTematicas(): void {
    this.paperService.getSimposiosActivos().subscribe((res: any) => {
      this.tematicas = res.data;
   });
  }

  asignarChair(): void {
    if (this.formAssignSecChairs.invalid) {
      this.toastr.warning('Por favor seleccione un chair y una tem??tica')
      return;
    }

    const item = {
      idChair: +this.formAssignSecChairs.controls.selectChair.value,
      idSimposio: +this.formAssignSecChairs.controls.selectTematica.value,
    };
    this.assignService.postAssignSecChairTheme(item).subscribe((res: any) => {
      this.chairsAssigned.push(res.data);
      this.showList = this.chairsAssigned.slice();
      this.formAssignSecChairs.reset();
    });
  }

  toggleRemoveHandled(item: any): void {
    this.toastr
      .show( '??Est?? seguro que desea eliminar el chair '+ item.nombreChair + ' ' + item.apellidoChair + '?', '??Eliminar chair?', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        // Aca se hace el camino feliz
        this.assignService.deleteAssignSecChairTheme(item).subscribe((res: any) => {
          const indice = this.chairsAssigned.indexOf(item);
          this.chairsAssigned.splice(indice, 1);
          this.showList = this.chairsAssigned.slice();
        });
      });
  }

  search(filterList): void {
    this.showList = filterList;
  }

}
