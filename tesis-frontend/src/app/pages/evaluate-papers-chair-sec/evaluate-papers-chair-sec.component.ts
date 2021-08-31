import { Component, OnInit } from '@angular/core';
import { IEvaluator } from 'src/app/core/models/ievaluator';
import { IntPaper } from 'src/app/core/models/IntPaper';

@Component({
  selector: 'app-evaluate-papers-chair-sec',
  templateUrl: './evaluate-papers-chair-sec.component.html',
  styleUrls: ['./evaluate-papers-chair-sec.component.css']
})
export class EvaluatePapersChairSecComponent implements OnInit {

  detailed: Boolean = false;

  constructor() { }

  articulos: any[] = [{id: '1', nombre: 'Artículo 1', estado: 'Aprobado'},
                      {id: '2', nombre: 'Artículo 2', estado: 'Rechazado'},
                      {id: '3', nombre: 'Artículo 3', estado: 'Sin evaluar'},
                      {id: '4', nombre: 'Artículo 4', estado: 'Para reentrega'},
                      {id: '5', nombre: 'Artículo 5', estado: 'Aprobado'},
                      {id: '6', nombre: 'Artículo 6', estado: 'Sin evaluar'}];

  evaluadores: IEvaluator[] = [{id: '1', nombre: 'Juan', puntuacion: '1'},
                               {id: '2', nombre: 'Aye', puntuacion: '1'},
                               {id: '3', nombre: 'Agus', puntuacion: '1'},]

  articuloSeleccionado: {
    articulo: IntPaper,
    evUno: IEvaluator,
    evDos: IEvaluator,
    evTres: IEvaluator
  }

  ngOnInit(): void {
  }

  verDetalle(art: any) {
    this.articuloSeleccionado = art;
    this.detailed = !this.detailed;
  }
}
