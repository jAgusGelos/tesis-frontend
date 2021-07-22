import { Component, OnInit } from '@angular/core';
import { IPaper } from 'src/app/core/models/IPaper';
import { PaperService } from 'src/app/core/services/paper.service';

@Component({
  selector: 'app-call-for-papers',
  templateUrl: './call-for-papers.component.html',
  styleUrls: ['./call-for-papers.component.css']
})
export class CallForPapersComponent implements OnInit {

  paperList = [];
  edit = true;
  paper = {};

  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
    this.getPaper();
  }

  getPaper(): void {
    this.paperService.getPaper().subscribe((res: any) => {
      this.paperList = res.data;
    });
  }

  newPaper(): void {
    this.edit = !this.edit;
    this.paper = {};
  }

  editPaper(paper: IPaper): void {
    this.edit = !this.edit;
    this.paper = paper;

  }

  deletePaper(item: IPaper): void {
    this.paperService.deletePaper(item).subscribe((res: any) => {
      alert('El paper ha sido eliminado correctamente');
    });
  }


  /**
   *
   * @param x Objeto compuesto de [IPaper, Archivo a subir, vieja dirección en caso que exista el archivo]
   * Recibe un paper, chequea que tenga un id.
   * Si lo tiene hace un PUT al back. Actualiza un paper creado.
   * Si no lo tiene crea un nuevo paper.
   * Guarda el archivo en el servidor.
   */
   toggleCreatePaper(x: any): void {
    const [item, fileToUpload, oldPath] = x;
    if (oldPath !== '') {
      // borrar el archivo existente
    }


    if (item.id === undefined) {
      this.paperService.postPaper(item).subscribe((res: any) => {
        alert('Paper Creado Correctamente');
        const newName = 'A_' + 'nroCongreso_' + res.data.idArticulo + '.pdf';
        // guardar en la carpeta del congreso
      });
    }
    else{
      this.paperService.putPaper(item).subscribe((res: any) => {
        alert('Paper Modificado Correctamente');
        const newName = 'A_' + 'nroCongreso_' + item.id + '.pdf';
      });
    }
    this.getPaper();
  }

}
