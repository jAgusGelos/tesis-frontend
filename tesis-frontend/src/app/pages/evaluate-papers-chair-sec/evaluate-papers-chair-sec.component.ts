import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluate-papers-chair-sec',
  templateUrl: './evaluate-papers-chair-sec.component.html',
  styleUrls: ['./evaluate-papers-chair-sec.component.css']
})
export class EvaluatePapersChairSecComponent implements OnInit {

  constructor() { }

  articulos: any[] = [{id: '1', nombre: 'Artículo 1', estado: 'Aprobado'},
                      {id: '2', nombre: 'Artículo 2', estado: 'Rechazado'},
                      {id: '3', nombre: 'Artículo 3', estado: 'Sin evaluar'},
                      {id: '4', nombre: 'Artículo 4', estado: 'Para reentrega'},
                      {id: '5', nombre: 'Artículo 5', estado: 'Aprobado'},
                      {id: '6', nombre: 'Artículo 6', estado: 'Sin evaluar'}];

  ngOnInit(): void {
  }

}
