import { Component, Input, OnInit } from '@angular/core';
import { IUserComplete } from '../../models/IUserComplete';

@Component({
  selector: 'app-comite-academico-list',
  templateUrl: './comite-academico-list.component.html',
  styleUrls: ['./comite-academico-list.component.css']
})
export class ComiteAcademicoListComponent implements OnInit {
  name: string;
  chair = null;
  cochair = null;
  @Input() symposium:{
    id: string,
    nombreSimposio: string,
    nombreChair: string,
    apellidoChair: string
  }
  constructor() { }

  ngOnInit(): void {
    this.name = this.symposium.nombreSimposio;
    this.chair = this.symposium.nombreChair +' ' + this.symposium.apellidoChair;
  }

}
