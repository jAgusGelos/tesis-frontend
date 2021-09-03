import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IassignSecChairTheme } from '../../models/iassign-sec-chair-theme';
import { AssignSecChairThemeService } from '../../services/assign-sec-chair-theme.service';
import { CongressService } from '../../services/congress.service';
import { PaperService } from '../../services/paper.service';
import { SymposiumService } from '../../services/symposium.service';

@Component({
  selector: 'app-assign-sec-chairs-form',
  templateUrl: './assign-sec-chairs-form.component.html',
  styleUrls: ['./assign-sec-chairs-form.component.css']
})
export class AssignSecChairsFormComponent implements OnInit {

  formAssignSecChairs: FormGroup;
  submitted = false;
  tematicas = ['Sistemas', 'Inteligencia Artificial', 'Software'];
  emptyAssign: IassignSecChairTheme[] = [];
  chairsAssigned = [
    {value: 'chair asignado 1', theme: 'Sistemas'}
  ];
  chairsNotAssigned = [
    {value: 'Chair secundario 1', assigned: false}
  ];

  @Input() asignacion = {
    selectCongreso: '',
    selectTematica: '',
    selectChair: '',
    assigned: false
  };



  constructor( private formBuilder: FormBuilder,
               private congressService: CongressService,
               private themesService: SymposiumService,
               private assignService: AssignSecChairThemeService,
               private paperService: PaperService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formAssignSecChairs = this.formBuilder.group({
      selectChair: ['', [Validators.required]],
      selectTematica: ['', [Validators.required]]
    });
    this.getTematicas();
  }

  getTematicas(): void {
    this.paperService.getSimposiosActivos().subscribe((res: any) => {
      console.log(res.data);

      this.tematicas = res.data;
   });
  }

  asignarChair(): void {
    if (this.formAssignSecChairs.invalid) {
      alert('Por Favor seleccione un chair y una tematica');
      return;
    }
    const item = {
      value: this.formAssignSecChairs.controls.selectChair.value,
      theme: this.formAssignSecChairs.controls.selectTematica.value,
    };
    this.assignService.postAssignSecChairTheme(item).subscribe((res: any) => {
      this.chairsAssigned.push(res.data);
    });
  }

}
