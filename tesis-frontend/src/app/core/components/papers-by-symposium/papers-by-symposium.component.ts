import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ICongress } from '../../models/ICongress';
import { IPaper } from '../../models/IPaper';
import { ISymposium } from '../../models/ISymposium';
import { ArticulosService } from '../../services/articulos.service';
import { SymposiumService } from '../../services/symposium.service';

@Component({
  selector: 'app-papers-by-symposium',
  templateUrl: './papers-by-symposium.component.html',
  styleUrls: ['./papers-by-symposium.component.css']
})
export class PapersBySymposiumComponent implements OnInit {
  
  @Input() congress: ICongress;
  selectedSymposium: ISymposium;
  selectedState: String;

  @Output() cancelPapersBySymposium = new EventEmitter();
  
  paperStatesList: String[] = ['sin subir', 'subido', 'pendiente de reentrega', 'aprobado', 'no aprobado', 'cancelado'];
  symposiumsList: ISymposium[];
  papersList: IPaper[];

  constructor( private articulosService: ArticulosService,
               private symposiumService: SymposiumService) { }

  ngOnInit(): void {
    this.getSymposiums();
  }

  getPapers() {
    if (this.selectedSymposium !== null) {
      this.getPapersBySymposium(this.selectedSymposium);
      if (this.selectedState !== null) {
        this.getPapersByState(this.selectedState);
      }
    }
  }

  getPapersByState(state: String) {
    let auxList: IPaper[];
    for (let index = 0; index < this.papersList.length; index++) {
      if (this.papersList[index].estado.toLowerCase() === state.toLowerCase()) {
        auxList.push(this.papersList[index]);
      }
    }
    this.papersList = auxList;
  }

  getPapersBySymposium(symposium: ISymposium) {
    this.articulosService.getPapersBySymposium(symposium).subscribe((res: any) => {
      this.papersList = res.data;
    });
  }

  getSymposiums() {
    this.symposiumService.getSymposium().subscribe((res: any) => {
      this.symposiumsList = res.data;
    });
  }

  cancel(): void {
    this.cancelPapersBySymposium.emit();
  }
}
