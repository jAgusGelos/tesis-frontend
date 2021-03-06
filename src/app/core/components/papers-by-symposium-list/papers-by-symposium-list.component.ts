import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IntPaper } from '../../models/IntPaper';
import { ISymposium } from '../../models/ISymposium';
import { PaperService } from '../../services/paper.service';
import { SymposiumService } from '../../services/symposium.service';

@Component({
  selector: 'app-papers-by-symposium-list',
  templateUrl: './papers-by-symposium-list.component.html',
  styleUrls: ['./papers-by-symposium-list.component.css']
})
export class PapersBySymposiumListComponent implements OnInit {

  selectedSymposium: ISymposium;
  selectedState: string;

  @Output() cancelPapersBySymposium = new EventEmitter();

  paperStatesList: string[] = ['Sin Subir', 'Subido', 'Pendiente de Reentrega', 'Aprobado', 'No Aprobado', 'Cancelado'];
  symposiumsList: ISymposium[];
  papersList: IntPaper[];

  constructor( private paperService: PaperService,
               private symposiumService: SymposiumService) { }

  ngOnInit(): void {
    this.getSymposiums();
  }

  getPapers(): void {
    if (this.selectedSymposium !== null) {
      this.getPapersBySymposium(this.selectedSymposium);
      if (this.selectedState !== null) {
        this.getPapersByState(this.selectedState);
      }
    }
  }

  getPapersByState(state: string) {
    let auxList: IntPaper[];
    for (let index = 0; index < this.papersList.length; index++) {
      if (this.papersList[index].estado.toLowerCase() === state.toLowerCase()) {
        auxList.push(this.papersList[index]);
      }
    }
    this.papersList = auxList;
  }

  getPapersBySymposium(symposium: ISymposium): void {
    this.paperService.getPapersXSimposio(symposium.id, null).subscribe((res: any) => {
      this.papersList = res.data;
    });
  }

  getSymposiums(): void {
    this.symposiumService.getSymposium().subscribe((res: any) => {
      this.symposiumsList = res.data;
    });
  }

  cancel(): void {
    this.cancelPapersBySymposium.emit();
  }

}
