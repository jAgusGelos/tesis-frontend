import { Component, OnInit } from '@angular/core';
import { IntPaper } from 'src/app/core/models/IntPaper';
import { PaperService } from 'src/app/core/services/paper.service';

@Component({
  selector: 'app-call-for-papers',
  templateUrl: './call-for-papers.component.html',
  styleUrls: ['./call-for-papers.component.css']
})
export class CallForPapersComponent implements OnInit {

  paperList = [];
  edit = false;
  paper = {};
  simposios = [];

  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getPaper();
    this.getSimposios();
  }

  getSimposios(): void {
    this.paperService.getSimposiosActivos().subscribe((res: any) => {
      this.simposios = res.data;
    });
  }

  getPaper(): void {
    this.paperService.getPaper().subscribe((res: any) => {
      this.paperList = res.data;
    });
  }

  newPaper(): void {
    this.edit = !this.edit;
    this.paper = {
      id: '',
      autores: [],
      responsable: '',
      nombre: '',
      estado: 'Sin subir',
      simposio: '',
      archivo: null,
    };
  }

  editPaper(paper: IntPaper): void {
    this.edit = !this.edit;
    this.paper = paper;

  }

  deletePaper(item: IntPaper): void {
    this.paperService.deletePaper(item).subscribe((res: any) => {
      alert('El paper ha sido eliminado correctamente');
      this.getPaper();
    });
  }


  /**
   *
   * @param x Objeto compuesto de IntPaper
   * Recibe un paper, chequea que tenga un id.
   * Si lo tiene hace un PUT al back. Actualiza un paper creado.
   * Si no lo tiene crea un nuevo paper.
   */
   toggleCreatePaper(item: any): void {
    console.log(item);

    if (item.id === '') {
      this.paperService.postPaper(item).subscribe((res: any) => {
        alert('Paper Creado Correctamente');
      });
    }
    else{
      this.paperService.putPaper(item).subscribe((res: any) => {
        alert('Paper Modificado Correctamente');
      });
    }
    this.getPaper();
  }

}
