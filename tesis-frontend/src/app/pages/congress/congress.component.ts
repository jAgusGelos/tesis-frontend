import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICongress } from 'src/app/core/models/ICongress';
import { CongressService } from 'src/app/core/services/congress.service';

@Component({
  selector: 'app-congress',
  templateUrl: './congress.component.html',
  styleUrls: ['./congress.component.css']
})
export class CongressComponent implements OnInit {

  congressList = [];
  edit = false;
  congress = {};
  sedes = [];


  constructor(private congressService: CongressService,
              private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getCongress();
    this.getSedes();
  }

  getSedes(): void {
    this.congressService.getSedes().subscribe((res: any) => {
      this.sedes = res;
    });
  }

  getCongress(): void {
    this.congressService.getCongress().subscribe((res: any) => {
      this.congressList = res.data;
      this.congressList = this.congressList.map((x: any) => {
        return {
          id: x.id,
          sede: x.sede,
          ano: x.año,
          nombre: x.nombre,
          chairPrincipal: x.chairPrincipal,
          coordLocal: x.coordLocal
        };
      });
    });
  }

  newCongress(): void {
    this.edit = !this.edit;
    this.congress = {};
  }

  editCongress(congress: ICongress): void {
    this.edit = !this.edit;
    this.congress = congress;
  }

  deleteCongress(item: ICongress): void {
    console.log(item);

    this.congressService.deleteCongress(item).subscribe((res: any) => {
      alert('El congreso ha sido eliminado correctamente');
    });
  }

  /**
   *
   * @param item
   * Recibe un congreso, chequea que tenga un id.
   * Si lo tiene hace un PUT al back. Actualiza un congreso creado.
   * Si no lo tiene crea un nuevo congreso.
   */
   toggleCreateCongress(item: ICongress): void {
    this.congressService.postCongress(item).subscribe((res: any) => {
      alert('Congreso Creado Correctamente');
      window.location.reload();
    });

  }

  toggleEditCongress(item: ICongress): void {
    this.congressService.putCongress(item).subscribe((res: any) => {
      alert('Congreso Modificado Correctamente');
      window.location.reload();
    });
  }
}
