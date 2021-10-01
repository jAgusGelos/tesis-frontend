import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISymposium } from 'src/app/core/models/ISymposium';
import { SymposiumService } from 'src/app/core/services/symposium.service';

@Component({
  selector: 'app-symposium',
  templateUrl: './symposium.component.html',
  styleUrls: ['./symposium.component.css']
})
export class SymposiumComponent implements OnInit {

  symposiumList: ISymposium[];
  edit = false;
  ok = false;
  symposium = {};

  constructor(private symposiumService: SymposiumService,
              private router: Router) {

                this.router.routeReuseStrategy.shouldReuseRoute = () => {
                  return false;
            };
          }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getSymposium();
  }

  getSymposium(): void {
    this.symposiumService.getSymposium().subscribe((res: any) => {
      this.symposiumList = res.data;
      this.ok = true;
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
      this.router.navigateByUrl('/simposios');
    });
  }

 /**
  * @param item
  * Recibe un simposio, chequea que tenga un id.
  * Si lo tiene hace un PUT al back. Actualiza un simposio creado.
  * Si no lo tiene crea un nuevo simposio.
  */
   toggleCreateSymposium(item: ISymposium): void {
    console.log(item.id);
    if (item.id === undefined) {
      this.symposiumService.postSymposium(item).subscribe((res: any) => {
        alert('Simposio Creado Correctamente');
        this.router.navigateByUrl('/simposios');
      });
    }
    else{
      this.symposiumService.putSymposium(item).subscribe((res: any) => {
        alert('Simposio Modificado Correctamente');
        this.router.navigateByUrl('/simposios');
      });
    }
    this.getSymposium();
  }


}
