import { Component, OnInit } from '@angular/core';
import { ISymposium } from 'src/app/core/models/ISymposium';
import { SymposiumService } from 'src/app/core/services/symposium.service';

@Component({
  selector: 'app-symposium',
  templateUrl: './symposium.component.html',
  styleUrls: ['./symposium.component.css']
})
export class SymposiumComponent implements OnInit {

  symposiumList: ISymposium[] = [{ id: '0', nombre: 'Probando', descripcion: 'Esto es una prueba' }];
  edit = false;
  symposium = {};

  constructor(private symposiumService: SymposiumService) { }

  ngOnInit(): void {
    this.getSymposium();
  }

  getSymposium(): void {
    this.symposiumService.getSymposium().subscribe((res: any) => {
      this.symposiumList = res.data;
    });
  }

  newSymposium(): void {
    this.edit = !this.edit;
    this.symposium = {};
  }

  editSymposium(symposium: ISymposium): void {
    this.edit = !this.edit;
    this.symposium = symposium;

  }

  deleteSymposium(item: ISymposium): void {
    this.symposiumService.deleteSymposium(item).subscribe((res: any) => {
      alert('El Simposio ha sido eliminado correctamente');
    });
  }

 /**
   *
   * @param item
   * Recibe un simposio, chequea que tenga un id.
   * Si lo tiene hace un PUT al back. Actualiza un simposio creado.
   * Si no lo tiene crea un nuevo simposio.
   */
   toggleCreateSymposium(item: ISymposium): void {
    if (item.id === undefined) {
      this.symposiumService.postSymposium(item).subscribe((res: any) => {
        alert('Simposio Creado Correctamente');
      });
    }
    else{
      this.symposiumService.putSymposium(item).subscribe((res: any) => {
        alert('Simposio Modificado Correctamente');
      });
    }
    this.getSymposium();
  }


}
