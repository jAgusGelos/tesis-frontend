import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  showComponent = 'list';


  constructor(private congressService: CongressService,
              private router: Router,
              private toastr: ToastrService,
              ) {
                this.router.routeReuseStrategy.shouldReuseRoute = () => {
                  return false;
                };
               }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getCongress();
    this.getSedes();
  }

  getSedes(): void {
    this.congressService.getSedes().subscribe((res: any) => {
      this.sedes = res.data;
    });
  }

  getCongress(): void {
    this.congressService.getCongress().subscribe((res: any) => {
      this.congressList = res.data;
      this.congressList = this.congressList.map((x: any) => {
        return {
          id: x.id,
          sede: x.sede,
          nombre_sede: x.nombre_sede,
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
    this.congressService.deleteCongress(item).subscribe((res: any) => {
      this.toastr.success('El congreso ha sido eliminado correctamente');
      this.router.navigateByUrl('/congreso');
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
      this.toastr.success('Congreso Creado Correctamente');
      this.router.navigateByUrl('/congreso');
    });

  }

  toggleEditCongress(item: ICongress): void {
    this.congressService.putCongress(item).subscribe((res: any) => {
      this.toastr.success('Congreso Modificado Correctamente');
      this.router.navigateByUrl('/congreso');
    });
  }

}
