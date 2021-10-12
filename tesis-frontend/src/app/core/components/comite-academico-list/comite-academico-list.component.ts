import { Component, Input, OnInit } from '@angular/core';
import { IUserComplete } from '../../models/IUserComplete';

@Component({
  selector: 'app-comite-academico-list',
  templateUrl: './comite-academico-list.component.html',
  styleUrls: ['./comite-academico-list.component.css']
})
export class ComiteAcademicoListComponent implements OnInit {
  name: string;
  chair: IUserComplete;
  cochair: IUserComplete;
  @Input() symposium:{
    id: string,
    nombre: string, 
  }
  constructor() { }

  ngOnInit(): void {
    this.name = this.symposium.nombre;
  }

}
