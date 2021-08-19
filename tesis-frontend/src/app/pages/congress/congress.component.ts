import { Component, OnInit } from '@angular/core';
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


  constructor(private congressService: CongressService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getCongress();
  }

  getCongress(): void {
    this.congressService.getCongress().subscribe((res: any) => {
      this.congressList = res.data;
      this.congressList = this.congressList.map((x: any) => {
        return {
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
    console.log(congress);

    this.congress = congress;
  }

  deleteCongress(item: ICongress): void {
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
      this.edit = !this.edit;
    });
    this.congressList = [];
    this.getCongress();
  }

  toggleEditCongress(item: ICongress): void {
    this.congressService.putCongress(item).subscribe((res: any) => {
      alert('Congreso Modificado Correctamente');
      this.edit = !this.edit;
    });
    this.getCongress();

  }
}
