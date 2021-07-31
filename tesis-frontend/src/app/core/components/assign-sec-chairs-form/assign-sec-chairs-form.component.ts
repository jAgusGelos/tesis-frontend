import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IassignSecChairTheme } from '../../models/iassign-sec-chair-theme';
import { AssignSecChairThemeService } from '../../services/assign-sec-chair-theme.service';
import { CongressService } from '../../services/congress.service';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-assign-sec-chairs-form',
  templateUrl: './assign-sec-chairs-form.component.html',
  styleUrls: ['./assign-sec-chairs-form.component.css']
})
export class AssignSecChairsFormComponent implements OnInit {

  formAssignSecChairs: FormGroup;
  submitted = false;
  congresos = ['Congreso 1', 'Congreso 2', 'Congreso 3']
  tematicas = ['Sistemas', 'Inteligencia Artificial', 'Software'];
  emptyAssign: IassignSecChairTheme[] = [];
  chairsAssigned = [
    {value: 'chair asignado 1', theme: 'Sistemas', assigned: true},
    {value: 'chair asignado 2', theme: 'Inteligencia Artificial', assigned: true},
    {value: 'chair asignado 3', theme: 'Software', assigned: true}
  ];
  chairsNotAssigned = [
    {value: 'Chair secundario 1', assigned: false},
    {value: 'Chair secundario 2', assigned: false},
    {value: 'Chair secundario 3', assigned: false},
    {value: 'Chair secundario 4', assigned: false},
    {value: 'Chair secundario 5', assigned: false}
  ];

  @Input() asignacion = {
    selectCongreso: '',
    selectTematica: '',
    selectChair: '',
    assigned: false
  };



  constructor( private formBuilder: FormBuilder,
               private congressService: CongressService,
               private themesService: ThemesService,
               private assignService: AssignSecChairThemeService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.formAssignSecChairs = this.formBuilder.group({
      selectCongreso: [this.asignacion.selectCongreso, [Validators.required]],
      selectChair: [this.asignacion.selectChair, [Validators.required]],
      selectTematica: [this.asignacion.selectTematica, [Validators.required]],
      assigned: [this.asignacion.assigned]
    });

    this.getCongresos();
    this.getTematicas();
  }

  getCongresos() {
    this.congressService.getCongress().subscribe((res: any) => {this.congresos = res.data});
  };
  getTematicas() {
    this.themesService.getThemes().subscribe((res: any) => {this.tematicas = res.data});
  };

  asignarChair() {
    if (this.formAssignSecChairs.invalid) {
      alert('Por Favor seleccione un congreso, un chair y una tematica');
      return;
    }

    const item = {
      value: this.formAssignSecChairs.controls.selectChair.value,
      theme: this.formAssignSecChairs.controls.selectTematica.value,
      assigned: true
    }
    this.chairsAssigned.push(item);
  };

  confirmar() {
    this.assignService.postAssignSecChairTheme(this.emptyAssign).subscribe((res: any) => {this.chairsAssigned = res.data});
  };
}
