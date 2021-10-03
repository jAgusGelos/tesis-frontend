import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  okey = false;

  constructor(private paperService: PaperService,
              private router: Router) {
                this.router.routeReuseStrategy.shouldReuseRoute = () => {
                  return false;
                }; }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getSimposios();
    this.getPaper();
  }

  getSimposios(): void {
    this.paperService.getSimposiosActivos().subscribe((res: any) => {
      this.simposios = res.data;
    });
  }

  getPaper(): void {
    this.paperService.getPaper().subscribe((res: any) => {
      this.paperList = res.data;
      this.okey = true;

    });
  }

  newPaper(): void {
    this.edit = !this.edit;
    this.paper = {
      id: '',
      autores: [],
      responsable: '',
      nombre: '',
      estado: 'sin subir',
      simposio: '',
      archivo: null,
    };
  }

  editPaper(paper: any): void {
    this.edit = !this.edit;
    this.paper = paper;
  }

  deletePaper(item: IntPaper): void {
    this.paperService.deletePaper(item).subscribe((res: any) => {
      alert('El paper ha sido eliminado correctamente');
      this.router.navigateByUrl('/callForPapers');
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
        this.router.navigateByUrl('/callForPapers');
      });
    }
  }

  sendPaper(item: any): void {
    this.paperService.sendPaper(item).subscribe((res: any) => {
      alert('Paper Enviado');
      this.router.navigateByUrl('/callForPapers');
    });
  }

}
